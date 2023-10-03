import { fetchData } from "./api";

interface NewSpaceData {
  parentSpaceWallId: number | null;
}

interface NewBlockData {
  parentSpaceWallTempId: number;
  type: string;
  sequence: number;
}

export const createSpace = async (spaceData: NewSpaceData) => {
  return await fetchData("new-spaces", "post", spaceData);
};

export const createBlock = async (blockData: NewBlockData) => {
  return await fetchData("componentTemps/new", "post", blockData);
};
