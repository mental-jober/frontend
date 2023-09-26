"use client";

import styled from "styled-components";
import Plates from "./Plates";
// import Block from "./Block"; // 중간 배포 도중에 사용되지않아서 eslint오류
import IntroProject from "./IntroProject";
import DraggableBlocks from "./DraggableBlocks";

export interface BlockData {
  id: string;
  name: string;
  hidden: boolean;
}

// 임시 데이터
// 추후 데이터를 zustand store에 추가해 데이터를 변경할 수 있도록 구성
const initialBlocks: BlockData[] = [
  { id: "task-1", name: "cont", hidden: false },
  { id: "task-2", name: "page", hidden: false },
  { id: "task-3", name: "temp", hidden: false },
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
  gap: 18px;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fb;
`;
