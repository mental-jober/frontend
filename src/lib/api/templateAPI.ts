import { getAccessTokenCookie } from "../cookies";
import { fetchData } from "./api";
import { client } from "./client";

const accessToken = getAccessTokenCookie();

client.interceptors.request.use(
  function (config) {
    if (!accessToken) {
      return config;
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  function (config) {
    if (config.status === 404) {
      console.log("404 Not Found");
    } else if (config.status === 500) {
      console.log("500 Internal Server Error");
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  },
);

export function getTemplate() {
  return fetchData(`/templates`, "get");
}
