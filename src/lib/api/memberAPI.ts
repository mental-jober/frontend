import { fetchData } from "./api";

export const checkMembers = async (space_wall_id: number) => {
  return fetchData(`/spaces/${space_wall_id}/member`, "get");
};
