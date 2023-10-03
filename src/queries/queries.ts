/* import { exampleApi } from "@/lib/api/api"; */
import { useQuery } from "react-query";
import { queryKey } from "./queryKeys";
import { checkMembers } from "@/lib/api/memberAPI";

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
