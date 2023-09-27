import { client } from "./client";
import { getAccessTokenCookie } from "../cookies";

type Method = "get" | "post" | "put" | "delete";

// 공용 fetch함수
export const fetchData = async (
  url: string,
  method: Method,
  reqData?: unknown,
) => {
  try {
    const response = await client({ url, method, data: reqData });
    return response;
  } catch (e) {
    console.error(e);
  }
};

client.interceptors.request.use(
  function (config) {
    const accessToken = getAccessTokenCookie();

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
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const loginApi = async (email: string, password: string) => {
  const requestBody = {
    email,
    password,
  };
  return fetchData("login", "post", requestBody);
};

export const signupApi = async (
  email: string,
  password: string,
  username: string,
) => {
  const requestBody = {
    email,
    password,
    username,
  };
  return fetchData("join", "post", requestBody);
};
