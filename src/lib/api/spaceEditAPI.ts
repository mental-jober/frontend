import { SpaceData } from "../store/useSpaceStore";
import { fetchData } from "./api";

export const createSpace = async (spaceData: SpaceData) => {
  const res = await fetchData("newspaces", "post", spaceData);
  console.log(res);
  return res;
};
