import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PLATE_CONFIG } from "@/lib/constants";
import { SpaceData } from "./store/useSpaceStore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getKRPlateTitle = (name: string) => {
  return PLATE_CONFIG[name].title;
};

export const modifySpaceData = (data: SpaceData) => {
  if (data) {
    const { componentList, ...exceptComponentListData } = data;

    const modifiedData = {
      ...exceptComponentListData,
      componentTempList: componentList,
    };

    return modifiedData;
  }
};
