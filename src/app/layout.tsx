"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider, styled } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <ThemeProvider theme={theme}>
        <body>
          <GlobalStyle />
          <ReactQueryProviders>
            <HeaderMargin />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}

const HeaderMargin = styled.div`
  margin-top: 58px;
`;
