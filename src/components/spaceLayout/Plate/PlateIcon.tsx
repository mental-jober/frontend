import { PLATE_CONFIG } from "@/lib/constants";
import styled from "styled-components";
import PlateTitle from "./PlateTitle";

interface PlateIconProps {
  name: string;
  isChip?: boolean;
}

export default function PlateIcon({ name, isChip }: PlateIconProps) {
  const { icon: Comp, bdColor, bgColor } = PLATE_CONFIG[name];
  return (
    <Circle $bdColor={bdColor} $bgColor={bgColor} $isChip={isChip}>
      <Icon>
        <Comp />
      </Icon>
      {isChip ? <PlateTitle name={name} /> : null}
    </Circle>
  );
}

const Circle = styled.div<{
  $bdColor: string;
  $bgColor: string;
  $isChip?: boolean;
}>`
  height: 22px;
  display: flex;
  padding: 0 5px;
  border: 1px solid;
  align-items: center;
  border-radius: 24px;
  stroke-width: 0.921px;
  justify-content: center;
  color: ${({ $bdColor }) => $bdColor};
  border-color: ${({ $bdColor }) => $bdColor};
  background-color: ${({ $bgColor }) => $bgColor};
  width: ${({ $isChip }) => ($isChip ? "fit-content" : "22px")};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.9);
`;
