import { fetchData } from "./api";

interface NewSpaceData {
  parentId: number;
}

export const createSpace = async (spaceData: NewSpaceData) => {
  const res = await fetchData("newspaces", "post", spaceData);
  console.log(res);
  return res;
};
