import { create } from "zustand";

export interface SpaceData {
  url: string;
  title: string;
  description: string;
  profile_image_url: string;
  background_image_url: string;
  path_ids: string;
  authorized: boolean;
  sequence: number;
}

interface useSpaceStore {
  datas: Record<string, SpaceData>;
  addData: (id: number, DataData: SpaceData) => void;
  editData: (id: number, newData: Partial<SpaceData>) => void;
  deleteData: (id: number) => void;
  getData: (id: number) => SpaceData | null;
}

const useSpaceStore = create<useSpaceStore>((set, get) => ({
  datas: {},

  addData: (id, newData) => {
    set((state) => ({
      datas: {
        ...state.datas,
        [id]: newData,
      },
    }));
  },

  editData: (id, editedData) => {
    set((state) => ({
      datas: {
        ...state.datas,
        [id]: {
          ...state.datas[id],
          ...editedData,
        },
      },
    }));
  },

  deleteData: (id) => {
    set((state) => {
      const { [id]: _, ...datas } = state.datas;
      return { datas };
    });
  },

  getData: (id) => {
    return id in get().datas ? get().datas[id] : null;
  },
}));

export default useSpaceStore;
