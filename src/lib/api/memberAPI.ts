import { fetchData } from "./api";

export const checkMembers = async (space_wall_id: number) => {
  return fetchData(`spaces/member/${space_wall_id}`, "get");
};

export const memberCRUD = async (
  space_wall_id: number,
  members: { email: string; auths: string }[],
) => {
  return fetchData(`spaces/member/${space_wall_id}`, "post", members);
};
