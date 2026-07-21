import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt from "jwt-simple";
import { PrismaClient } from "../prisma/generated/client";
import { z } from "zod";
import { calculateMetrics } from "@typearena/shared/src/typing/metrics";

const prisma = new PrismaClient();
const app = express();

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_123";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: true, credentials: true, methods: ["GET", "POST"] }
});

// ── MIDDLEWARE ──────────────────────────────────────────────────────────────
const requireAdmin = (req: any, res: any, next: any) => {
  let token = req.cookies.adminToken;
  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length === 2 && parts[0] === "Bearer") {
      token = parts[1];
    }
  }
  if (!token && req.query.token) {
    token = String(req.query.token);
  }
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.decode(token, JWT_SECRET);
    if (decoded.role !== "admin") throw new Error();
    req.admin = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// ── REST APIs ───────────────────────────────────────────────────────────────

// 1. Admin Authentication
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });
    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) return res.status(401).json({ error: "Invalid credentials" });
    const token = jwt.encode({ id: admin.id, role: "admin", username }, JWT_SECRET);
    res.cookie("adminToken", token, { httpOnly: true, sameSite: "lax" });
    res.json({ success: true, username, adminToken: token });
  } catch {
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("adminToken");
  res.json({ success: true });
});

app.get("/api/auth/me", requireAdmin, (req: any, res) => {
  res.json({ username: req.admin.username });
});

// 2. Player Registration
app.post("/api/players", async (req, res) => {
  const schema = z.object({
    name: z.string().min(2),
    scholarNumber: z.string().min(2),
    mandal: z.string(),
    semester: z.string().min(1),
    avatarId: z.string()
  });
  try {
    const data = schema.parse(req.body);
    const sessionToken = require("crypto").randomBytes(32).toString("hex");
    const playerSession = await prisma.playerSession.create({
      data: { ...data, sessionToken }
    });
    res.json({ sessionToken, playerSession });
  } catch {
    res.status(400).json({ error: "Invalid registration data" });
  }
});

// 3. Paragraphs
app.get("/api/paragraphs", async (_req, res) => {
  const paragraphs = await prisma.paragraph.findMany({ orderBy: { createdAt: "desc" } });
  res.json(paragraphs);
});

app.post("/api/paragraphs", requireAdmin, async (req, res) => {
  try {
    const schema = z.object({
      title: z.string().min(1),
      content: z.string().min(10),
      language: z.enum(["EN", "HI"]),
      difficulty: z.enum(["EASY", "MEDIUM", "HARD"])
    });
    const data = schema.parse(req.body);
    const p = await prisma.paragraph.create({ data });
    res.json(p);
  } catch (e) {
    res.status(400).json({ error: "Invalid paragraph data", details: String(e) });
  }
});

app.patch("/api/paragraphs/:id", requireAdmin, async (req, res) => {
  try {
    const schema = z.object({
      title: z.string().min(1).optional(),
      content: z.string().min(10).optional(),
      language: z.enum(["EN", "HI"]).optional(),
      difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).optional()
    });
    const data = schema.parse(req.body);
    const p = await prisma.paragraph.update({ where: { id: req.params.id }, data: data as any });
    res.json(p);
  } catch (e) {
    res.status(400).json({ error: "Update failed", details: String(e) });
  }
});

app.delete("/api/paragraphs/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const linkedComps = await prisma.competition.findMany({ where: { paragraphId: id } });
    for (const comp of linkedComps) {
      await prisma.result.deleteMany({ where: { competitionId: comp.id } });
      await prisma.competitionParticipant.deleteMany({ where: { competitionId: comp.id } });
    }
    await prisma.competition.deleteMany({ where: { paragraphId: id } });
    await prisma.paragraph.delete({ where: { id } });
    res.json({ success: true });
  } catch (e) {
    console.error("Delete paragraph error:", e);
    res.status(500).json({ error: "Delete failed", details: String(e) });
  }
});

app.delete("/api/competitions/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.result.deleteMany({ where: { competitionId: id } });
    await prisma.competitionParticipant.deleteMany({ where: { competitionId: id } });
    await prisma.competition.delete({ where: { id } });
    io.to(id).emit("competition:deleted", { id });
    res.json({ success: true });
  } catch (e) {
    console.error("Delete competition error:", e);
    res.status(500).json({ error: "Delete failed", details: String(e) });
  }
});

// 4. Competitions
app.post("/api/competitions", requireAdmin, async (req: any, res) => {
  const { name, language, gameMode, difficulty, duration, paragraphId } = req.body;
  try {
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const comp = await prisma.competition.create({
      data: { name, language, gameMode, difficulty, duration, paragraphId, roomCode, status: "DRAFT", createdBy: req.admin.id }
    });
    res.json(comp);
  } catch (error) {
    console.error("Failed to create competition:", error);
    res.status(500).json({ error: "Creation failed", details: String(error) });
  }
});

app.get("/api/competitions", async (_req, res) => {
  const comps = await prisma.competition.findMany({ orderBy: { createdAt: "desc" } });
  res.json(comps);
});

app.get("/api/competitions/:id", async (req, res) => {
  try {
    const comp = await prisma.competition.findUnique({
      where: { id: req.params.id },
      include: { paragraph: true }
    });
    if (!comp) return res.status(404).json({ error: "Not found" });
    res.json(comp);
  } catch {
    res.status(500).json({ error: "Failed to fetch competition" });
  }
});

app.patch("/api/competitions/:id/status", requireAdmin, async (req, res) => {
  const { status } = req.body;
  try {
    const comp = await prisma.competition.update({
      where: { id: req.params.id },
      data: { status }
    });
    io.to(comp.id).emit("competition:state", comp);
    res.json(comp);
  } catch {
    res.status(500).json({ error: "Update failed" });
  }
});

// 5. Results
app.get("/api/results", async (req, res) => {
  const { competitionId } = req.query;
  try {
    const whereClause = competitionId ? { competitionId: String(competitionId) } : {};
    const results = await prisma.result.findMany({
      where: whereClause,
      include: {
        participant: { include: { playerSession: true } },
        competition: true
      },
      orderBy: [{ finalRank: "asc" }, { netWpm: "desc" }, { accuracy: "desc" }],
      take: 100
    });
    res.json(results);
  } catch {
    res.status(500).json({ error: "Failed to fetch results" });
  }
});

// 6. Hall of Fame — all-time top performers by net WPM
app.get("/api/hall-of-fame", async (req, res) => {
  try {
    const language = req.query.language as string | undefined;
    const results = await prisma.result.findMany({
      where: language ? { competition: { language } } : {},
      include: {
        participant: { include: { playerSession: true } },
        competition: { select: { name: true, language: true, gameMode: true } }
      },
      orderBy: [{ netWpm: "desc" }, { accuracy: "desc" }],
      take: 10
    });
    res.json(results);
  } catch {
    res.status(500).json({ error: "Failed to fetch hall of fame" });
  }
});

// 7. Reports — Excel export
app.get("/api/reports/excel", requireAdmin, async (req, res) => {
  const { competitionId } = req.query;
  try {
    const ExcelJS = require("exceljs");
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "TypeArena";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet("Results");
    sheet.columns = [
      { header: "Rank", key: "rank", width: 8 },
      { header: "Name", key: "name", width: 22 },
      { header: "Scholar No.", key: "scholarNumber", width: 16 },
      { header: "Course", key: "mandal", width: 16 },
      { header: "Semester", key: "semester", width: 12 },
      { header: "Net WPM", key: "netWpm", width: 12 },
      { header: "Gross WPM", key: "grossWpm", width: 12 },
      { header: "CPM", key: "cpm", width: 10 },
      { header: "Accuracy %", key: "accuracy", width: 14 },
      { header: "Errors", key: "errors", width: 10 },
      { header: "Completion %", key: "completion", width: 14 },
    ];

    // Style header row
    const headerRow = sheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF075EA8" } };
    headerRow.alignment = { horizontal: "center" };

    const whereClause = competitionId ? { competitionId: String(competitionId) } : {};
    const results = await prisma.result.findMany({
      where: whereClause,
      include: { participant: { include: { playerSession: true } } },
      orderBy: [{ finalRank: "asc" }, { netWpm: "desc" }]
    });

    results.forEach((r, idx) => {
      const ps = r.participant.playerSession;
      const row = sheet.addRow({
        rank: r.finalRank ?? idx + 1,
        name: ps.name,
        scholarNumber: ps.scholarNumber,
        mandal: ps.mandal,
        semester: ps.semester,
        netWpm: r.netWpm,
        grossWpm: r.grossWpm,
        cpm: r.cpm,
        accuracy: Math.round(r.accuracy),
        errors: r.errors,
        completion: Math.round(r.completionPercentage)
      });
      // Highlight top 3
      if ((r.finalRank ?? idx + 1) <= 3) {
        row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF3CD" } };
      }
    });

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename=TypeArena_Results_${Date.now()}.xlsx`);
    await workbook.xlsx.write(res);
    res.end();
  } catch (e) {
    console.error("Excel export error:", e);
    res.status(500).json({ error: "Excel export failed", details: String(e) });
  }
});

// ── SOCKET.IO REALTIME ──────────────────────────────────────────────────────
const liveState: Record<string, Record<string, any>> = {};

// Map socket.id → { competitionId, participantId } for disconnect handling
const socketMap: Record<string, { competitionId: string; participantId?: string }> = {};

io.use(async (socket, next) => {
  const { sessionToken, adminToken } = socket.handshake.auth;
  if (adminToken) {
    try {
      const decoded = jwt.decode(adminToken, JWT_SECRET);
      if (decoded.role === "admin") {
        (socket as any).isAdmin = true;
        return next();
      }
    } catch { /* fall through */ }
  }
  if (sessionToken) {
    const session = await prisma.playerSession.findUnique({ where: { sessionToken } });
    if (session) {
      (socket as any).playerSession = session;
      return next();
    }
  }
  return next(new Error("Authentication error"));
});

// ── Helper: assign final ranks after competition ends ──
async function assignFinalRanks(competitionId: string) {
  const participants = Object.values(liveState[competitionId] || {});

  // Sort: highest progress → highest WPM → highest accuracy
  participants.sort((a, b) => {
    if (b.progress !== a.progress) return b.progress - a.progress;
    if (b.netWpm !== a.netWpm) return b.netWpm - a.netWpm;
    return b.accuracy - a.accuracy;
  });

  for (let i = 0; i < participants.length; i++) {
    const p = participants[i];
    const rank = i + 1;
    try {
      // Check if result already exists
      const existing = await prisma.result.findFirst({
        where: { competitionId, participantId: p.id }
      });
      if (existing) {
        await prisma.result.update({
          where: { id: existing.id },
          data: { finalRank: rank }
        });
      } else {
        await prisma.result.create({
          data: {
            competitionId,
            participantId: p.id,
            grossWpm: p.grossWpm || 0,
            netWpm: p.netWpm || 0,
            cpm: p.cpm || 0,
            accuracy: p.accuracy || 0,
            errors: p.errors || 0,
            completionPercentage: p.progress || 0,
            finalRank: rank,
            finishTime: null
          }
        });
      }
    } catch (e) {
      console.error(`Rank assignment error for participant ${p.id}:`, e);
    }
  }
}

io.on("connection", (socket: any) => {
  console.log("✅ Connected:", socket.id, socket.isAdmin ? "[ADMIN]" : `[PLAYER: ${socket.playerSession?.name}]`);

  socket.on("competition:join", async ({ competitionId }: { competitionId: string }) => {
    socket.join(competitionId);
    socketMap[socket.id] = { competitionId };

    if (socket.isAdmin) {
      // Send current state to admin on join
      const comp = await prisma.competition.findUnique({
        where: { id: competitionId },
        include: { paragraph: true }
      });
      if (comp) socket.emit("competition:state", comp);
      if (liveState[competitionId]) {
        socket.emit("lobby:players", Object.values(liveState[competitionId]));
      }
      return;
    }

    const session = socket.playerSession;
    try {
      let participant = await prisma.competitionParticipant.findUnique({
        where: { competitionId_playerSessionId: { competitionId, playerSessionId: session.id } }
      });

      if (!participant) {
        participant = await prisma.competitionParticipant.create({
          data: { competitionId, playerSessionId: session.id, connectionStatus: "ONLINE" },
          include: { playerSession: true }
        }) as any;
      } else {
        participant = await prisma.competitionParticipant.update({
          where: { id: participant.id },
          data: { connectionStatus: "ONLINE" },
          include: { playerSession: true }
        }) as any;
      }

      if (socketMap[socket.id]) {
        socketMap[socket.id]!.participantId = participant!.id;
      }

      if (!liveState[competitionId]) liveState[competitionId] = {};
      if (!liveState[competitionId][participant!.id]) {
        liveState[competitionId][participant!.id] = {
          ...participant,
          progress: 0,
          netWpm: 0,
          accuracy: 100,
          errors: 0,
          grossWpm: 0,
          cpm: 0
        };
      } else {
        // Reconnect — restore live state
        liveState[competitionId][participant!.id].connectionStatus = "ONLINE";
      }

      io.to(competitionId).emit("lobby:players", Object.values(liveState[competitionId]));

      // Send current competition state to joining player
      const comp = await prisma.competition.findUnique({
        where: { id: competitionId },
        include: { paragraph: true }
      });
      if (comp) socket.emit("competition:state", comp);

    } catch (e) {
      console.error("competition:join error:", e);
    }
  });

  socket.on("competition:leave", ({ competitionId }: any) => {
    socket.leave(competitionId);
  });

  socket.on("player:ready", async ({ competitionId, participantId }: any) => {
    try {
      await prisma.competitionParticipant.update({
        where: { id: participantId },
        data: { ready: true }
      });
      if (liveState[competitionId]?.[participantId]) {
        liveState[competitionId][participantId].ready = true;
      }
      io.to(competitionId).emit("lobby:players", Object.values(liveState[competitionId] || {}));
    } catch (e) {
      console.error("player:ready error:", e);
    }
  });

  socket.on("admin:start", async ({ competitionId }: any) => {
    if (!socket.isAdmin) return;
    try {
      const startAt = new Date(Date.now() + 4000);
      const comp = await prisma.competition.update({
        where: { id: competitionId },
        data: { status: "COUNTDOWN", startAt },
        include: { paragraph: true }
      });
      io.to(competitionId).emit("competition:state", comp);

      setTimeout(async () => {
        const activeComp = await prisma.competition.update({
          where: { id: competitionId },
          data: { status: "ACTIVE" },
          include: { paragraph: true }
        });
        io.to(competitionId).emit("competition:state", activeComp);
      }, 4000);
    } catch (e) {
      console.error("admin:start error:", e);
    }
  });

  socket.on("admin:pause", async ({ competitionId }: any) => {
    if (!socket.isAdmin) return;
    try {
      const comp = await prisma.competition.update({
        where: { id: competitionId },
        data: { status: "PAUSED" }
      });
      io.to(competitionId).emit("competition:state", comp);
    } catch (e) {
      console.error("admin:pause error:", e);
    }
  });

  socket.on("admin:resume", async ({ competitionId }: any) => {
    if (!socket.isAdmin) return;
    try {
      const comp = await prisma.competition.update({
        where: { id: competitionId },
        data: { status: "ACTIVE" }
      });
      io.to(competitionId).emit("competition:state", comp);
    } catch (e) {
      console.error("admin:resume error:", e);
    }
  });

  socket.on("admin:stop", async ({ competitionId }: any) => {
    if (!socket.isAdmin) return;
    try {
      await assignFinalRanks(competitionId);
      const comp = await prisma.competition.update({
        where: { id: competitionId },
        data: { status: "FINISHED", endedAt: new Date() }
      });
      io.to(competitionId).emit("competition:end", { competitionId });
      io.to(competitionId).emit("competition:state", comp);
    } catch (e) {
      console.error("admin:stop error:", e);
    }
  });

  socket.on("game:progress", async (data: any) => {
    const { competitionId, participantId, correctGraphemes, errors, totalTyped } = data;

    const comp = await prisma.competition.findUnique({
      where: { id: competitionId },
      include: { paragraph: true }
    });
    if (!comp || comp.status !== "ACTIVE" || !comp.startAt) return;

    const targetLength = comp.paragraph.content.length;
    const elapsedMs = Date.now() - new Date(comp.startAt).getTime();
    const metrics = calculateMetrics(totalTyped, correctGraphemes, targetLength, elapsedMs);

    if (liveState[competitionId]?.[participantId]) {
      Object.assign(liveState[competitionId][participantId], {
        progress: metrics.completionPercentage,
        netWpm: metrics.netWpm,
        accuracy: metrics.accuracy,
        errors: metrics.errors,
        grossWpm: metrics.grossWpm,
        cpm: metrics.cpm
      });
      io.to(competitionId).emit("game:progress-update", Object.values(liveState[competitionId]));
    }
  });

  socket.on("game:finish", async ({ competitionId, participantId }: any) => {
    try {
      const pState = liveState[competitionId]?.[participantId];
      if (!pState) return;

      const finishTimeMs = Date.now();
      const comp = await prisma.competition.findUnique({ where: { id: competitionId } });
      const finishTimeDelta: number | null = comp?.startAt
        ? Math.round(finishTimeMs - new Date(comp.startAt).getTime())
        : null;

      // Calculate finish rank based on finishTime (lower = better)
      const finishedBefore = Object.values(liveState[competitionId] || {})
        .filter(p => p.finishedAt).length;
      const rank = finishedBefore + 1;

      // Update live state
      if (liveState[competitionId]?.[participantId]) {
        liveState[competitionId][participantId].finishedAt = new Date(finishTimeMs);
        liveState[competitionId][participantId].finalRank = rank;
      }

      // Upsert Result record
      const existing = await prisma.result.findFirst({
        where: { competitionId, participantId }
      });

      if (existing) {
        await prisma.result.update({
          where: { id: existing.id },
          data: {
            grossWpm: pState.grossWpm || 0,
            netWpm: pState.netWpm || 0,
            cpm: pState.cpm || 0,
            accuracy: pState.accuracy || 0,
            errors: pState.errors || 0,
            completionPercentage: pState.progress || 100,
            finalRank: rank,
            finishTime: finishTimeDelta
          }
        });
      } else {
        await prisma.result.create({
          data: {
            competitionId,
            participantId,
            grossWpm: pState.grossWpm || 0,
            netWpm: pState.netWpm || 0,
            cpm: pState.cpm || 0,
            accuracy: pState.accuracy || 0,
            errors: pState.errors || 0,
            completionPercentage: pState.progress || 100,
            finalRank: rank,
            finishTime: finishTimeDelta
          }
        });
      }

      await prisma.competitionParticipant.update({
        where: { id: participantId },
        data: { finishedAt: new Date(finishTimeMs) }
      });

      if (liveState[competitionId]) {
        io.to(competitionId).emit("game:progress-update", Object.values(liveState[competitionId]));
      }

    } catch (e) {
      console.error("game:finish error:", e);
    }
  });

  socket.on("disconnect", async () => {
    const ctx = socketMap[socket.id];
    if (ctx) {
      const { competitionId, participantId } = ctx;
      if (participantId && liveState[competitionId]?.[participantId]) {
        liveState[competitionId][participantId].connectionStatus = "OFFLINE";
        io.to(competitionId).emit("lobby:players", Object.values(liveState[competitionId]));
        // Mark as offline in DB (don't delete — they may reconnect)
        try {
          await prisma.competitionParticipant.update({
            where: { id: participantId },
            data: { connectionStatus: "OFFLINE" }
          });
        } catch { /* ignore */ }
      }
      delete socketMap[socket.id];
    }
    console.log("❌ Disconnected:", socket.id);
  });
});

const PORT = parseInt(String(process.env.PORT || "3001"), 10);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 TypeArena Backend running on http://0.0.0.0:${PORT}`);
});
