import styled from "styled-components";
import { PiDotsSixVertical, PiCaretRight } from "react-icons/pi";
import BlockContent from "./BlockContent";

interface BlockTopProps {
  name: string;
}

export default function BlockTop({ name }: BlockTopProps) {
  return (
    <Top>
      <StyledDragDots />
      <BlockContent name={name} />
      <StyledArrow />
    </Top>
  );
}

const Top = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDragDots = styled(PiDotsSixVertical)`
  width: 18px;
  height: 18px;
  color: #b5b5b5;
`;

const StyledArrow = styled(PiCaretRight)`
  height: 18px;
  height: 18px;
  color: #b5b5b5;
`;
