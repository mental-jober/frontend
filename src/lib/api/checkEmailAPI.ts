import { fetchData } from "./api";

export const checkEmail = async (email: string) => {
  return fetchData(`check-email/${email}`, "get");
};
