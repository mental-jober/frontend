"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import RootStyleRegistry from "@/lib/RootStyleRegistry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";
import GlobalStyle from "@/styles/GlobalStyle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <body className="max-w-[430px] w-full m-auto border border-solid px-5 pb-5 box-border">
          <GlobalStyle />
          <ReactQueryProviders>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}
