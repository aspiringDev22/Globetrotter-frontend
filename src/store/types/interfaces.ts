export interface AppState {
    username: string;
    setUsername: (newUsername: string) => void;
    showNewComponent: boolean;
    toggleComponent: () => void;
    scores: number[];
    addScore: (newScore: number) => void;
    setScores: (scores: number[]) => void;
  }