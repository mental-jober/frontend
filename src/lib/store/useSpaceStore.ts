import { create } from "zustand";

export interface SpaceData {
  url: string;
  title: string;
  description: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  componentList: [];
  createMemberId: number;
  pathIds: string;
  authorized: boolean;
  sequence: number;
  createdAt: string;
  updatedAt: string;
}

interface SpaceStore {
  datas: Record<string, SpaceData>;
  addData: (id: number, DataData?: SpaceData) => void;
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

const useSpaceStore = create<SpaceStore>((set, get) => ({
  datas: {},

  addData: (id, newData) => {
    if (!newData) {
      newData = {
        url: "",
        title: "",
        description: "",
        profileImageUrl: "",
        backgroundImageUrl: "",
        componentList: [],
        createMemberId: 0,
        pathIds: "",
        authorized: false,
        sequence: 0,
        createdAt: "",
        updatedAt: "",
      };
    }

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
