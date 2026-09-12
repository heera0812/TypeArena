/**
 * TypeArena — LAN-compatible API URL helper
 *
 * HOW IT WORKS (LAN / no internet needed):
 *  - Do NOT set NEXT_PUBLIC_API_URL in .env.local for LAN mode.
 *  - The helper reads window.location.hostname at call-time, so any PC on the
 *    same network that opens http://<host-ip>:3000 will automatically talk to
 *    http://<host-ip>:3001 — no config needed on client machines.
 *
 * OVERRIDE (Render/Vercel deployment):
 *  - Set NEXT_PUBLIC_API_URL=https://your-backend.onrender.com in .env.local
 */

const BACKEND_PORT = 3001;

function buildBaseUrl(): string {
  // Env var always wins (set for internet/production deployments).
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  }
  // In the browser, use the same hostname the user is already on.
  if (typeof window !== "undefined") {
    return `http://${window.location.hostname}:${BACKEND_PORT}`;
  }
  // SSR fallback — only used for server-side rendering, not for actual fetches
  // in "use client" components (those always run in the browser).
  return `http://localhost:${BACKEND_PORT}`;
}

/** Returns the backend REST API base URL. Evaluated lazily at call-time. */
export function getApiUrl(): string {
  return buildBaseUrl();
}

/** Returns the backend WebSocket URL. Evaluated lazily at call-time. */
export function getWsUrl(): string {
  return buildBaseUrl();
}

// ─── Backward-compatible aliases (used across the codebase) ─────────────────
// These are fine as module-level constants because all actual "use client"
// fetch/socket calls happen after hydration when window is available.
// However, prefer getApiUrl()/getWsUrl() in any new code.
export const API_URL = getApiUrl();
export const WS_URL = getWsUrl();
