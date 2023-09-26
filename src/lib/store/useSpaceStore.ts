import { create } from "zustand";

interface ComponentData {
  hidden: boolean;
  title: string;
  content: string;
}

interface SpaceData {
  id: number;
  title: string;
  description: string;
  img: string;
  path: number;
  sequence: number;
  components: {
    [key: number]: ComponentData;
  };
}

interface useSpaceStore {
  datas: Record<string, SpaceData>;
  addData: (id: number, DataData: SpaceData) => void;
  editData: (id: number, newData: Partial<SpaceData>) => void;
  deleteData: (id: number) => void;
  getData: (id: number) => SpaceData | null;
  editComponent: (
    dataId: number,
    componentId: number,
    componentData: ComponentData,
  ) => void;
  getComponent: (dataId: number, componentId: number) => ComponentData | null;
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

  editComponent: (dataId, componentId, componentData) => {
    set((state) => {
      const data = state.datas[dataId];
      if (data && data.components[componentId]) {
        const newData = {
          ...data,
          components: {
            ...data.components,
            [componentId]: {
              ...data.components[componentId],
              ...componentData,
            },
          },
        };

        return {
          datas: {
            ...state.datas,
            [dataId]: newData,
          },
        };
      }
      return state;
    });
  },

  getComponent: (dataId, componentId) => {
    const data = get().datas[dataId];
    return data ? data.components[componentId] : null;
  },
}));

export default useSpaceStore;
