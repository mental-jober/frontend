"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import RootStyleRegistry from "@/lib/RootStyleRegistry";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <body>
          <GlobalStyle />
          <ReactQueryProviders>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}
