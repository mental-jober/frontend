import { useUserStore } from "../store/useUserStore";
import { client } from "./client";

type Method = "get" | "post" | "put" | "delete";

// 공용 fetch함수
export const fetchData = async (
  url: string,
  method: Method,
  reqData?: unknown,
) => {
  try {
    const {data} = await client({ url, method, data: reqData });
    return data;
  } catch (e) {
    console.error(e);
  }
};

client.interceptors.request.use(
  function (config) {
    const accessToken = useUserStore.getState().user.accessToken; // 동적으로 토큰을 가져옵니다.
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
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
    if (error.response?.status === 401) {
      // 예: 401 Unauthorized 경우
      useUserStore.getState().clearUser(); // 사용자 정보를 초기화
    }
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

export const logoutApi = async () => {
  return fetchData("logout", "post");
};
