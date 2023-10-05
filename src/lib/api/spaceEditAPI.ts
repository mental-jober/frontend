import { fetchData } from "./api";

interface NewSpaceData {
  spaceWallId: number | null;
}

interface NewBlockData {
  spaceWallId: number;
  type: string;
  sequence: number;
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
