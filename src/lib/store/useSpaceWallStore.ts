import { create } from "zustand";

interface SpaceWallIdStore {
  spaceWallId: number | null;
  spaceWallTempId: number | null;
  setSpaceWallId: (id: number) => void;
  setSpaceWallTempId: (id: number) => void;
}

const useSpaceWallStore = create<SpaceWallIdStore>((set) => ({
  spaceWallId: null,
  spaceWallTempId: null,
  setSpaceWallId: (id) => set({ spaceWallId: id }),
  setSpaceWallTempId: (id) => set({ spaceWallTempId: id }),
}));

export default useSpaceWallStore;
