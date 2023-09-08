import { client } from "./client";

type Method = "get" | "post" | "put" | "delete";

// 공용 fetch함수
const fetchData = async (url: string, method: Method, reqData?: unknown) => {
  try {
    const { data } = await client({ url, method, data: reqData });
    return data;
  } catch (e) {
    console.error(e);
  }
};

// fetchData 사용예시
export const exampleApi = async () => {
  return await fetchData("/template", "get");
};
