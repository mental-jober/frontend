import { create } from "zustand";

interface useStoreProps {
  blocks: (string | { title: string; text: string })[];
  currentText: string;
  titleText: string;
  currentIndex: number | null;
  profileImage?: string;
  addBlock: (title: string, text: string) => void;
  updateBlock: (index: number, title: string, text: string) => void;
  setTitleText: (text: string) => void;
  setCurrentText: (text: string) => void;
  setCurrentIndex: (index: number | null) => void;
  setProfileImage: (image: string) => void;
}

const useStore = create<useStoreProps>((set) => ({
  blocks: [],
  currentText: "",
  currentIndex: null,
  titleText: "",
  addBlock: (title, text) =>
    set((state) => ({ blocks: [...state.blocks, { title, text }] })),
  updateBlock: (index, title, text) =>
    set((state) => {
      const updatedBlocks = [...state.blocks];
      updatedBlocks[index] = { title, text };
      return { blocks: updatedBlocks };
    }),
  setCurrentText: (text) => set({ currentText: text }),
  setTitleText: (text) => set({ titleText: text }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setProfileImage: (image) => set({ profileImage: image }),
}));

export default useStore;
