"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import StyledComponentsRegistry from "@/lib/styled-components";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <body className="max-w-[430px] w-full m-auto border border-solid p-5 box-border">
          <GlobalStyle />
          <ReactQueryProviders>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}
