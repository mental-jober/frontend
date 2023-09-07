"use client";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./queryClient";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export default function ReactQueryProviders({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
