import { ReactNode } from "react";
import styled from "styled-components";

interface PlateLayoutProps {
  children: ReactNode;
  name: string;
}

// 완성 후 유틸로 이동
const onClickPlate = (plate: string) => {
  if (plate) console.log(`${plate}`);
};

const PlateLayout = ({ children, name }: PlateLayoutProps) => {
  return (
    <Wrapper
      onClick={() => {
        onClickPlate(name);
      }}
    >
      {children}
    </Wrapper>
  );
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
