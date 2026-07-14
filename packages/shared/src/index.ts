// Shared Enums
export enum Language {
  ENGLISH = "ENGLISH",
  HINDI = "HINDI",
  MIXED = "MIXED"
}

export enum GameMode {
  RACE = "RACE",
  SPEED_SPRINT = "SPEED_SPRINT",
  ACCURACY_CHALLENGE = "ACCURACY_CHALLENGE"
}

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD"
}

// Shared Interfaces
export interface PlayerProfile {
  id: string;
  displayName: string;
  scholarNumber: string;
  course: string;
  semester: number;
  avatarId: string;
}

export interface RoomState {
  roomId: string;
  name: string;
  language: Language;
  mode: GameMode;
  difficulty: Difficulty;
  players: any[];
  status: string;
}
