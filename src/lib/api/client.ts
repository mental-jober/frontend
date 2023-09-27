import axios from "axios";

// 추후 환경변수로 이동
const BASE_URL = "https://jober-workspace.azurewebsites.net/";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const client = axios.create(axiosConfig);
