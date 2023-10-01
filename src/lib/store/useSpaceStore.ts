import { create } from "zustand";

export interface SpaceData {
  createMember: number;
  url: string;
  title: string;
  description: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  pathIds: string;
  authorized: boolean;
  sequence: number;
}

interface useSpaceStore {
  datas: Record<string, SpaceData>;
  addData: (id: number, DataData: SpaceData) => void;
  deleteData: (id: number) => void;
  getData: (id: number) => SpaceData | null;
  getValue: <K extends keyof SpaceData>(
    id: number,
    property: K,
  ) => SpaceData[K] | null;
  setValue: <K extends keyof SpaceData>(
    id: number,
    property: K,
    newValue: SpaceData[K],
  ) => void;
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

  deleteData: (id) => {
    set((state) => {
      const { [id]: _, ...datas } = state.datas;
      return { datas };
    });
  },

  getData: (id) => {
    return id in get().datas ? get().datas[id] : null;
  },

  getValue: (id, property) => {
    const data = get().datas[id];
    return data ? data[property] : null;
  },

  setValue: (id, property, newValue) => {
    set((state) => ({
      datas: {
        ...state.datas,
        [id]: {
          ...state.datas[id],
          [property]: newValue,
        },
      },
    }));
  },
}));

export default useSpaceStore;
