import axios from "axios";

// 추후 환경변수로 이동
const BASE_URL = "url";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
};

export const client = axios.create(axiosConfig);
