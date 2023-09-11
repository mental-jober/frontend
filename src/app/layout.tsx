"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import RootStyleRegistry from "@/lib/RootStyleRegistry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <ThemeProvider theme={theme}>
        <body>
          <ReactQueryProviders>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}
