import { create } from "zustand";

type PageLayoutType = "프로필형" | "프로젝트형";
type PlateName = "cont" | "line" | "temp" | "page" | "link";

type PageLayoutStore = {
  type: PageLayoutType;
  composition: PlateName[];
  setType: (newType: PageLayoutType) => void;
  setComposition: (newComposition: PlateName[]) => void;
};

export const usePageLayoutStore = create<PageLayoutStore>((set) => ({
  type: "프로필형",
  composition: [],
  setType: (newType) => set({ type: newType }),
  setComposition: (newComposition) => set({ composition: newComposition }),
}));
