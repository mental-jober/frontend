// toastStore.js
import { create } from "zustand";

interface useToastStoreProps {
  message: null | string;
  showToast: (msg: string) => void;
  hideToast: () => void;
}

interface froalaEditorStoreProps {
  text: string;
  setText: (value: string) => void;
}

export const useToastStore = create<useToastStoreProps>((set) => ({
  message: null,
  showToast: (msg) => set({ message: msg }),
  hideToast: () => set({ message: null }),
}));

export const froalaEditorStore = create<froalaEditorStoreProps>((set) => ({
  text: "",
  setText: (value) => set({ text: value }),
}));
