# Functional Implementation Plan

## P0 — Core Multiplayer Engine (Immediate Priority)

1. **Database Re-architecture & Seeding**
   - Refactor `schema.prisma` to include: `Admin`, `PlayerSession`, `Competition`, `CompetitionParticipant`, `Paragraph`, `Result`.
   - Implement `bcrypt` password hashing for Admin.
   - Run Prisma migrations and seed the database with initial paragraphs and `admin/password`.

2. **Real Authentication & Registration**
   - **Admin Auth:** POST `/api/auth/login`. Issue `httpOnly` JWT session cookie. Protect admin routes.
   - **Player Registration:** Connect registration UI to POST `/api/players`. Create `PlayerSession` in DB. Return JWT or session ID to store locally. Prevent duplicate registrations for the same Scholar Number in the same competition.

3. **Competition State Machine**
   - Define exact states: `DRAFT`, `LOBBY_OPEN`, `COUNTDOWN`, `ACTIVE`, `PAUSED`, `FINISHED`.
   - Update admin dashboard API calls to use these exact states.

4. **Socket.IO Real-Time Architecture**
   - Implement socket namespaces/rooms strictly tied to `Competition.id`.
   - Implement event validation (using Zod or manual checks).
   - Require valid `sessionToken` or `adminToken` in `socket.handshake.auth` for connections.
   - Implement `player:ready` logic.

5. **Server-Authoritative Typing Engine & Metrics**
   - Build a shared `metrics.ts` library for Gross WPM, Net WPM, Accuracy, CPM.
   - The server calculates the exact countdown (`startAt = Date.now() + 4000`).
   - Clients send `progress` (throttled 5/sec) -> Server calculates Net WPM/Accuracy based on server `startAt` timer, not client time.
   - Implement Hindi `Intl.Segmenter` logic for correct grapheme counting.

6. **Race Mode Lifecycle**
   - Live Leaderboard uses strictly server-calculated rankings.
   - First player finishes -> Server stores time -> Match continues.
   - All players finish -> Server transitions to `FINISHED` -> Saves `Result` to DB.

7. **LAN Deployment Setup**
   - Update `package.json` with `npm run lan` (binds to `0.0.0.0`).
   - Fix all hardcoded `localhost:3001` fetch calls to use relative URLs (proxy via Next.js) or dynamic window.location injections.

## P1 — Extended Internship Requirements
- Export to Excel (ExcelJS).
- Export to PDF (PDFKit, server-side generated).
- Paragraph Management Library (CRUD for Admin).
- Final Polish of Results Board.

## P2 — Bonus Features
- Speed Sprint Mode.
- Accuracy Challenge Mode.
- Team Battle.
- Tournament Brackets.
