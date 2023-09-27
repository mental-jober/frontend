import { client } from "./client";

const accessToken = "";

client.interceptors.request.use(
  function (config) {
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
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  },
);
