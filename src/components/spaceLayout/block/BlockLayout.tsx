import { ReactNode } from "react";
import styled from "styled-components";

interface BlockLayoutProps {
  children: ReactNode;
}

export default function BlockLayout({ children }: BlockLayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  min-width: 320px;
  max-width: 430px;
  height: 111px;
  padding: 10px;
  display: flex;
  background: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 5.5267px 0px rgba(0, 0, 0, 0.1);
`;
