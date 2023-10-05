"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReactQueryProviders from "@/queries/queryProvider";
import GlobalStyle from "@/styles/GlobalStyle";
import StyledComponentsRegistry from "@/lib/registry";
import useAuthCheck from "@/components/auth/useAuthCheck";
import { ModalProvider } from "@/components/provider/ModalProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  // TODO: 토큰 유효성 검사 api 호출
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isAuthenticated = useAuthCheck();

  return (
    <html lang="ko">
      <ThemeProvider theme={theme}>
        <body>
          <GlobalStyle />
          <ReactQueryProviders>
            <ModalProvider />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReactQueryProviders>
        </body>
      </ThemeProvider>
    </html>
  );
}
