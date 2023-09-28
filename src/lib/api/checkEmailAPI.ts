import { fetchData } from "./api";

export const checkEmail = async (email: string) => {
  return fetchData(`checkEmail/${email}`, "get");
};
