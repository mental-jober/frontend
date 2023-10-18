import { ComponentData } from "../store/useComponentStore";
import { fetchData } from "./api";

interface NewSpaceData {
  parentSpaceWallId: number | null;
}

interface NewBlockData {
  spaceWallId: number;
  type: string;
  sequence: number;
}

interface ComponentTempData {
  componentTempId: number;
  visible: boolean;
  sequence: number;
  deleted: boolean;
}
export interface SaveSpaceData {
  spaceWallTempId: number;
  spaceWallId: number;
  title: string;
  description: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  componentTempList: ComponentTempData[];
}

export interface BaseSpaceData {
  url: string;
  title: string;
  description: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  createMemberId: number;
  pathIds: string;
  authorized: boolean;
  sequence: number;
  createdAt: string;
  updatedAt: string;
}

export interface TempSpaceData extends BaseSpaceData {
  componentTempList: ComponentData[];
}

export const createSpace = async (spaceData: NewSpaceData) => {
  return await fetchData("new-spaces", "post", spaceData);
};

export const createBlock = async (
  spaceWallId: number,
  blockData: NewBlockData,
) => {
  return await fetchData(
    `componentTemps/new/${spaceWallId}`,
    "post",
    blockData,
  );
};

export const enterEdit = async (spaceWallId: string) => {
  return await fetchData(`spaceTemps/new/${spaceWallId}`, "post");
};

export const saveEditSpace = async (
  spaceWallId: number,
  spaceData: TempSpaceData,
) => {
  return await fetchData(`spaceTemps/save/${spaceWallId}`, "put", spaceData);
};

export const getEditSpace = async (spaceWallId: number) => {
  return await fetchData(`spaceTemps/view/${spaceWallId}`, "get");
};

export const saveSpace = async (
  spaceWallId: number,
  spaceData: SaveSpaceData,
) => {
  return await fetchData(`spaceTemps/done/${spaceWallId}`, "put", spaceData);
};
