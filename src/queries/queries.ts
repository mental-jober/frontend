/* import { exampleApi } from "@/lib/api/api"; */
import { useQuery } from "react-query";
import { queryKey } from "./queryKeys";
import { checkMembers } from "@/lib/api/memberAPI";
import { enterEdit, getEditSpace, saveEditSpace } from "@/lib/api/spaceEditAPI";
import { componentsView } from "@/lib/api/componentsAPI";
import { SpaceData } from "@/lib/store/useSpaceStore";

interface QueryOptions {
  [key: string]: unknown;
}

/* export const useExampleQuery = (params: string, options?: QueryOptions) => {
  return useQuery([queryKey.EXAMPLE, params], exampleApi, { ...options });
}; */

export const useMemberCheckQuery = (
  space_wall_id: number,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.MEMBER, space_wall_id],
    () => checkMembers(space_wall_id),
    {
      ...options,
    },
  );
};

export const useEnterEditQuery = (
  spaceWallId: string,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.ENTER_EDIT, spaceWallId],
    () => enterEdit(spaceWallId),
    { ...options },
  );
};

export const useComponentsViewQuery = (
  componentTempId: number,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.CONTVIEW, componentTempId],
    () => componentsView(componentTempId),
    { ...options },
  );
};

export const useSpaceTempSaveQuery = (
  spaceWallId: number,
  spaceData: SpaceData,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.SPACETEMP_SAVE, spaceWallId],
    () => saveEditSpace(spaceWallId, spaceData),
    { ...options },
  );
};

export const useSpaceTempViewQuery = (
  spaceWallId: number,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.SPACETEMP_VIEW, spaceWallId],
    () => getEditSpace(spaceWallId),
    { ...options },
  );
};
