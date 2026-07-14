# TypeArena Functional Audit

| Requirement | Current Status | Existing File | Problem | Required Fix |
|-------------|----------------|---------------|---------|--------------|
| Project Setup | WORKING | `package.json`, `apps/web`, `apps/server` | None | N/A |
| Landing UI | WORKING | `apps/web/src/app/page.tsx` | None | N/A |
| Player Registration | PARTIAL | `apps/web/src/app/register/page.tsx` | Uses fake generic API without true session token or real persistence mapping. | Implement `PlayerSession` creation and JWT/session tokens. |
| Unique Player Session | NOT IMPLEMENTED | `apps/server/src/index.ts` | Relies fully on client `localStorage` tracking. | Implement secure `httpOnly` cookie or JWT session strategy. |
| Admin Authentication | PARTIAL | `apps/web/src/app/admin/page.tsx` | Uses hardcoded client-side check `admin/password`. | Implement `Admin` DB model, bcrypt password, and secure auth routes. |
| Competition Creation | PARTIAL | `apps/server/src/index.ts` | Creates a basic `Room`, lacks `Competition` full schema and strict state transitions. | Update schema to `Competition`, implement strict transitions (DRAFT -> LOBBY_OPEN). |
| English Typing | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Evaluates progress on client, sends WPM directly. | Server must validate progress and calculate official metrics. |
| Hindi Unicode Typing | NOT IMPLEMENTED | N/A | Lacks `Intl.Segmenter` and Unicode composition handling. | Implement Grapheme-level segmentation and IME handling. |
| Race Mode | PARTIAL | `apps/server/src/index.ts` | Lacks server-authoritative finish state logic. | Server must record finish time and assign ranks accurately. |
| Speed Sprint | NOT IMPLEMENTED | N/A | - | Implement after Race Mode. |
| Accuracy Challenge | NOT IMPLEMENTED | N/A | - | Implement after Race Mode. |
| Team Battle | NOT IMPLEMENTED | N/A | - | Implement after Race Mode. |
| Tournament Mode | NOT IMPLEMENTED | N/A | - | Implement after Race Mode. |
| Socket.IO Connection | PARTIAL | `apps/server/src/index.ts` | Connections are not authenticated against session. | Validate `socket.handshake` or session payload via Zod. |
| Competition Rooms | PARTIAL | `apps/server/src/index.ts` | Basic `liveRooms` memory structure. | Bind to DB `Competition` and sync state strictly. |
| Multiplayer Lobby | PARTIAL | `apps/web/src/app/lobby/page.tsx` | Exists, but prone to bypass (default room). | Require explicit competition ID and valid session to join. |
| Player Join | PARTIAL | `apps/server/src/index.ts` | Emits event, but doesn't validate player session. | Verify `PlayerSession` in DB before allowing join. |
| Player Leave | PARTIAL | `apps/server/src/index.ts` | Disconnect removes player, but reconnect policy is naive. | Implement robust disconnect/reconnect logic (mark as offline, don't drop). |
| Ready Status | NOT IMPLEMENTED | N/A | Missing entirely from current flow. | Add `player:ready` and `player:unready` logic. |
| Synchronized Countdown | PARTIAL | `apps/server/src/index.ts` | Relies on 3-second setTimeout, no timestamp sync. | Server broadcasts `startAt = Date.now() + X`. Clients calculate delta. |
| Typing Engine | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-authoritative. | Refactor to use a shared metrics module. |
| Gross WPM | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-side math. | Move calculation to shared module / server validation. |
| Net WPM | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-side math. | Move calculation to shared module. |
| CPM | PARTIAL | `apps/web/src/app/results/page.tsx` | Missing from real-time events. | Broadcast in live metrics payload. |
| Accuracy | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-side math. | Move calculation to shared module. |
| Errors | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-side math. | Move calculation to shared module. |
| Completion Percentage | PARTIAL | `apps/web/src/components/TypingEngine.tsx` | Client-side math. | Move calculation to shared module. |
| Live Progress | PARTIAL | `apps/server/src/index.ts` | Too frequent, trusts client WPM blindly. | Throttle to 5 updates/sec, send compact payload, server calculates rank. |
| Animated Race | WORKING | `apps/web/src/app/lobby/page.tsx` | Avatars move based on completion %. | N/A |
| Live Leaderboard | PARTIAL | `apps/web/src/app/lobby/page.tsx` | Real, but lacks strict sorting rules (WPM vs Accuracy tie-breaker). | Implement central ranking logic on server. |
| Final Ranking | PARTIAL | `apps/server/src/index.ts` | Saves results, but lacks atomic race completion assignments. | Server must freeze results when competition ends and assign strict ranks. |
| Admin Start | PARTIAL | `apps/server/src/index.ts` | Bypassed validation, allowed "default" start. | Validate admin session, room state `LOBBY_OPEN`, and trigger sync countdown. |
| Admin Pause | NOT IMPLEMENTED | N/A | - | Add `admin:pause` logic and DB state `PAUSED`. |
| Admin Resume | NOT IMPLEMENTED | N/A | - | Add `admin:resume` logic and DB state `ACTIVE`. |
| Admin Stop | NOT IMPLEMENTED | N/A | - | Add `admin:stop` logic and DB state `FINISHED`. |
| Admin Reset | NOT IMPLEMENTED | N/A | - | Add `admin:reset` logic and DB state `LOBBY_OPEN`. |
| Paragraph Library | PARTIAL | `apps/server/prisma/schema.prisma` | Model exists, no admin CRUD UI or API routes. | Implement API routes and dashboard UI for paragraphs. |
| Paragraph Add | NOT IMPLEMENTED | N/A | - | Implement POST `/api/paragraphs` |
| Paragraph Edit | NOT IMPLEMENTED | N/A | - | Implement PATCH `/api/paragraphs/:id` |
| Paragraph Delete | NOT IMPLEMENTED | N/A | - | Implement DELETE `/api/paragraphs/:id` |
| Paragraph Import | NOT IMPLEMENTED | N/A | - | Implement bulk import endpoint. |
| Individual Scorecard | PARTIAL | `apps/web/src/app/results/page.tsx` | Shows data, but relies on potentially loose DB bindings. | Ensure data integrity against `PlayerSession` and `Competition`. |
| Competition Result Sheet | PARTIAL | `apps/web/src/app/results/page.tsx` | Needs full sorting matching server authoritative ranks. | Pull directly from `Result` model. |
| Top 10 | NOT IMPLEMENTED | N/A | Currently shows all. | Implement filtering API. |
| Course Ranking | NOT IMPLEMENTED | N/A | - | Add analytical query logic. |
| Department Ranking | NOT IMPLEMENTED | N/A | - | Add analytical query logic. |
| Excel Export | NOT IMPLEMENTED | N/A | - | Implement `ExcelJS` generation route. |
| PDF Export | PARTIAL | `apps/web/src/app/results/page.tsx` | Uses `window.print()` browser native function instead of server PDF. | Implement `PDFKit` server-side generation. |
| LAN Deployment | PARTIAL | `package.json` | Currently assumes `localhost` in many `fetch` calls. | Bind to `0.0.0.0`, inject LAN IP into client env, create `npm run lan` script. |
| 50 Concurrent User Testing | NOT IMPLEMENTED | N/A | Unverified limits. | Test throttled Socket events and DB pool limits. |
