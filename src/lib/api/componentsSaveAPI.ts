import { fetchData } from "./api";

interface ComponentsSaveParams {
  componentTempId: number;
  templateId?: number;
  childSpaceWallTempId?: number;
  type: "cont" | "link" | "line" | "page" | "temp";
  title?: string;
  content?: string;
}

export const componentsSave = async (
  componentTempId: number,
  params: ComponentsSaveParams,
) => {
  return fetchData(`componentTemps/${componentTempId}`, "put", params);
};
