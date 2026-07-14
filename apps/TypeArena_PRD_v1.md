# TypeArena Product Requirements Document (PRD)

Version: 1.0

## Vision
Build a LAN-first Hindi & English multiplayer typing competition platform for DSVV.

## Users
- Student
- Faculty/Admin
- Spectator (optional)

## Core Student Flow
Home -> Register -> Avatar -> Lobby -> Ready -> Countdown -> Typing Battle -> Results

## Core Admin Flow
Login -> Dashboard -> Create Competition -> Open Lobby -> Monitor Players -> Start -> Finish -> Export

## Features
- LAN only (50+ players)
- Socket.IO multiplayer
- Hindi Unicode typing
- English typing
- Race Mode
- Speed Sprint
- Accuracy Challenge
- Live leaderboard
- Admin dashboard
- Paragraph library
- Excel/PDF exports
- Hall of Fame
- Practice Mode

## Tech Stack
Next.js, React, TypeScript, Tailwind CSS, Framer Motion,
Node.js, Express, Socket.IO, PostgreSQL, Prisma, Zod.

## Database
Admin
Competition
PlayerSession
CompetitionParticipant
Paragraph
Result

## REST APIs
/api/auth
/api/competitions
/api/paragraphs
/api/results
/api/reports

## Socket Events
competition:join
competition:leave
player:ready
game:progress
leaderboard:update
competition:start
competition:end

## UI Pages
Landing
Registration
Lobby
Typing Arena
Results
Hall of Fame
Admin Login
Admin Dashboard
Competition Manager
Paragraph Manager

## Design
Use DSVV blue-white branding.
Primary font: Inter.
Typing font: JetBrains Mono.
Hindi font: Noto Sans Devanagari.
Light mode default, Dark Arena mode during gameplay.

## Acceptance Criteria
Student can register, join lobby, compete, receive results.
Admin can create competitions, monitor players, export reports.
Supports 50+ LAN users with synchronized gameplay.
