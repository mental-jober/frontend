import { create } from "zustand";

interface ComponentTempIdStore {
  componentTempId: number | null;
  setComponentTempId: (id: number) => void;
}

const useCompnetTempIdStore = create<ComponentTempIdStore>((set) => ({
  componentTempId: null,
  setComponentTempId: (id) => set({ componentTempId: id }),
}));

export default useCompnetTempIdStore;
