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

interface profileStoreProps {
  profileUrl: string;
  setProfileUrl: (imageUrl: string) => void;
  profileTitle: string;
  setProfileTitle: (vlaue: string) => void;
  profileText: string;
  setProfileText: (vlaue: string) => void;
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

export const profileStore = create<profileStoreProps>((set) => ({
  profileUrl: "",
  setProfileUrl: (imageUrl) => set({ profileUrl: imageUrl }),
  profileTitle: "",
  setProfileTitle: (value) => set({ profileTitle: value }),
  profileText: "",
  setProfileText: (value) => set({ profileText: value }),
}));
