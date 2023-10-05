import { fetchData } from "./api";

interface ComponentsSaveParams {
  componentTempId: number;
  templateId?: number;
  thisSpaceWallId?: number;
  title?: string;
  content?: string;
}

export const componentsSave = async (
  componentTempId: number,
  params: ComponentsSaveParams,
) => {
  return fetchData(`componentTemps/edit/${componentTempId}`, "put", params);
};

export const componentsView = async (componentTempId: number) => {
  return fetchData(`componentTemps/view/${componentTempId}`, "get");
};
