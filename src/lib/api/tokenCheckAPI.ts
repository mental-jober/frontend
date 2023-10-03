import { fetchData } from "./api";

export const tokenCheck = async () => {
  return fetchData("/check-token", "get");
};
