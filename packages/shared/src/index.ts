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

export enum Mandal {
  VASHISTHA = "VASHISTHA",
  VISHWAMITRA = "VISHWAMITRA",
  ATRI = "ATRI",
  GAUTAM = "GAUTAM",
  BHARDWAJ = "BHARDWAJ",
  JAMADAGNI = "JAMADAGNI",
  KASHYAP = "KASHYAP"
}

// Shared Interfaces
export interface PlayerProfile {
  id: string;
  displayName: string;
  scholarNumber: string;
  mandal: string;
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
