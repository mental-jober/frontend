import {  QueryClient } from "react-query";

// queryClient 기본값 셋팅
export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 0,
  //     cacheTime: 300000,
  //     refetchOnMount: false,
  //     refetchOnReconnect: false,
  //     refetchOnWindowFocus: false,
  //   },
  // },
  // queryCache: new QueryCache({
  //   onError: () => {},
  // }),
});
