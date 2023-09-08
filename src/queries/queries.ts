import { exampleApi } from "@/lib/api/api";
import { useQuery } from "react-query";
import { queryKey } from "./queryKeys";

interface QueryOptions {
  [key: string]: unknown;
}

export const useExampleQuery = (params: string, options?: QueryOptions) => {
  return useQuery([queryKey.EXAMPLE, params], exampleApi, { ...options });
};
