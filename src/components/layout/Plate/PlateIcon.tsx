import { PLATE_CONFIG } from "@/lib/constants";
import styled, { css } from "styled-components";

interface PlateIconProps {
  name: string;
}

export default function PlateIcon({ name }: PlateIconProps) {
  const { icon: Comp, bdColor, bgColor } = PLATE_CONFIG[name];
  return (
    <Circle $bdColor={bdColor} $bgColor={bgColor}>
      <Icon>
        <Comp />
      </Icon>
    </Circle>
  );
}

const Circle = styled.div<{
  $bdColor: string;
  $bgColor: string;
}>`
  width: 22px;
  height: 22px;
  display: flex;
  border: 1px solid;
  border-radius: 50%;
  stroke-width: 0.921px;
  justify-content: center;
  color: ${({ $bdColor }) => $bdColor};
  border-color: ${({ $bdColor }) => $bdColor};
  background-color: ${({ $bgColor }) => $bgColor};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.9);
`;
