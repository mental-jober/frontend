import { create } from "zustand";

interface useIsNewSpaceStore {
  isNewSpace: boolean;
  setIsNewSpace: (value: boolean) => void;
}

export const useIsNewSpaceStore = create<useIsNewSpaceStore>((set) => ({
  isNewSpace: false,
  setIsNewSpace: (value) => set({ isNewSpace: value }),
}));
