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
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  },
);

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
