import { ReactNode } from "react";
import styled from "styled-components";

interface PlateLayoutProps {
  children: ReactNode;
}

const PlateLayout = ({ children }: PlateLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 52px;
  gap: 1.842px;
  height: 54px;
  display: flex;
  padding: 9px 11px;
  align-items: center;
  flex-direction: column;
  border-radius: 15.659px;
  background-color: #fff;
`;
export default PlateLayout;
