"use client"

import "@/styles/globals.css";
import { ReactNode } from "react";
import RootStyleRegistry from "@/lib/RootStyleRegistry";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <ThemeProvider theme={theme}>
        <body>
          <GlobalStyle />
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
