import styled from "styled-components";
import Plates from "./Plates";
import Block from "./Block";
import IntroProject from "./IntroProject";
import DraggableBlocks from "./DraggableBlocks";

export interface BlockData {
  id: string;
  name: string;
}

// 임시 데이터
const initialBlocks: BlockData[] = [
  { id: "task-1", name: "text" },
  { id: "task-2", name: "page" },
  { id: "task-3", name: "temp" },
];

// page로 이동 예정
export default function SpaceProject() {
  return (
    <Container>
      <IntroProject />
      <Plates />
      <DraggableBlocks blockData={initialBlocks} />
    </Container>
  );
}

const Container = styled.div`
  gap: 10px;
  width: 360px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fb;
`;
