import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.body`
  width: 100%;
  height: 100%;
  min-width: 360px;
  max-width: 430px;
`;
export default Layout;
