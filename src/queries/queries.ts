/* import { exampleApi } from "@/lib/api/api"; */
import { useQuery } from "react-query";
import { queryKey } from "./queryKeys";
import { checkMembers } from "@/lib/api/memberAPI";
import {
  TempSpaceData,
  enterEdit,
  getEditSpace,
  saveEditSpace,
} from "@/lib/api/spaceEditAPI";
import { componentsView } from "@/lib/api/componentsAPI";

interface QueryOptions {
  [key: string]: unknown;
}

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
  space_wall_id: number,
  componentTempId: number,
  options?: QueryOptions,
) => {
  return useQuery(
    [queryKey.CONTVIEW, space_wall_id, componentTempId],
    () => componentsView(space_wall_id, componentTempId),
    { ...options },
  );
};

export const useSpaceTempSaveQuery = (
  spaceWallId: number,
  spaceData: TempSpaceData,
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
