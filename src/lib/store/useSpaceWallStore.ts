import { create } from "zustand";

interface SpaceWallIdStore {
  spaceWallId: number | null;
  setSpaceWallId: (id: number) => void;
}

const useSpaceWallStore = create<SpaceWallIdStore>((set) => ({
  spaceWallId: null,
  setSpaceWallId: (id) => set({ spaceWallId: id }),
}));

export default useSpaceWallStore;
