import { fetchData } from "./api";
import { client } from "./client";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEsImVtYWlsIjoicGlsamluQGdtYWlsLmNvbSIsImFzc2lnbmVkU3BhY2VNZW1iZXJJbmZvcyI6Int9IiwiaWF0IjoxNjk1NzkwNzE0LCJleHAiOjE2OTU4NzcxMTR9.W5o8fcnR7vNuzrvXWWxjfOsqdB7IlPCLIzM69QblLSA";

client.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;
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

export function login() {
  return fetchData("/login", "post", {
    email: "piljin@gmail.com",
    password: "apaqj11!",
  });
}

function encode(keyword: string) {
  const rLang = /[ㄱ-ㅎ | ㅏ-ㅣ | 가-힣]/;
  if (keyword.match(rLang)) {
    const encodeKeyword = encodeURI(keyword);
    return encodeKeyword;
  } else {
    return keyword;
  }
}

export function getTemplate(type: string) {
  return fetchData(`/templates?type=${encode(type)}`, "get");
}
