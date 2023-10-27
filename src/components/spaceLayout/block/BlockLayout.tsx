import { ReactNode } from "react";
import styled from "styled-components";

interface BlockLayoutProps {
  children: ReactNode;
}

const BlockLayout = ({ children }: BlockLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 111px;
  padding: 10px;
  display: flex;
  min-width: 320px;
  max-width: 400px;
  background: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 5.5267px 0px rgba(0, 0, 0, 0.1);
`;

export default BlockLayout;
