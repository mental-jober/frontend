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
    const { data } = await client({ url, method, data: reqData });
    return data;
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
  try {
    const requestBody = {
      email,
      password,
    };
    const res = await client({
      url: "login",
      method: "post",
      data: requestBody,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
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

export const logoutApi = async () => {
  return fetchData("logout", "post");
};

export const checkTokenApi = async () => {
  return fetchData("check-token", "get");
};

export const getShareSpaceListApi = async () => {
  return fetchData("my-spaces", "get");
};

export const getTempSpaceByIdApi = async (spaceWallId: number) => {
  return fetchData(`spaceTemps/view/${spaceWallId}`, "get");
};