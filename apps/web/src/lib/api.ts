/**
 * TypeArena — LAN-compatible API URL helper
 * Set NEXT_PUBLIC_API_URL in .env.local to the host machine's LAN IP
 * e.g. NEXT_PUBLIC_API_URL=http://192.168.1.100:3001
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
export const WS_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
