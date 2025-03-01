import { create } from "zustand";
import { nanoid } from "nanoid";
import { AppState } from "./types/interfaces";
import { syncUsername, updateScores } from "@/utils/supabaseService";

const STORAGE_KEY = "globetrotter_username";

const initializeUsername = () => {
  if (typeof window === "undefined") {
    return `user-${nanoid(5)}`;
  }
  
  const storedUsername = localStorage.getItem(STORAGE_KEY);
  
  if (storedUsername) {
    syncUsername(storedUsername).catch(err => 
      console.error("Error syncing existing username:", err)
    );
    return storedUsername;
  } else {
    const newUsername = `user-${nanoid(6)}`;
    localStorage.setItem(STORAGE_KEY, newUsername);
    syncUsername(newUsername).catch(err => 
      console.error("Error syncing new username:", err)
    );
    return newUsername;
  }
};

const useAppStore = create<AppState>((set, get) => ({
  username: initializeUsername(),
  scores: [],
  
  setUsername: (newUsername) => {
    localStorage.setItem(STORAGE_KEY, newUsername);
    syncUsername(newUsername).catch(err => 
      console.error("Error syncing updated username:", err)
    );
    set({ username: newUsername });
  },
  
  addScore: (newScore) => {
    set((state) => {
      const updatedScores = [...state.scores, newScore];
      updateScores(state.username, updatedScores).catch((err: any) => 
        console.error("Error updating scores:", err)
      );
      return { scores: updatedScores };
    });
  },
  
  setScores: (scores) => {
    set({ scores });
  },
  
  showNewComponent: false,
  toggleComponent: () => {
    set((state) => ({ showNewComponent: !state.showNewComponent }));
  },
}));

export default useAppStore;