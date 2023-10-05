import { fetchData } from "./api";

interface ComponentsSaveParams {
  componentTempId: number;
  templateId?: number;
  thisSpaceWallId?: number;
  title?: string;
  content?: string;
}

export const componentsSave = async (
  space_wall_id: number,
  params: ComponentsSaveParams,
) => {
  return fetchData(`componentTemps/edit/${space_wall_id}`, "put", params);
};

export const componentsView = async (
  space_wall_id: number,
  componentTempId: number,
) => {
  return fetchData(`componentTemps/view/${space_wall_id}`, "get", {
    componentTempId,
  });
};
