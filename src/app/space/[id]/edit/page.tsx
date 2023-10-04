"use client";

import DraggableBlocks from "@/components/spaceLayout/DraggableBlocks";
import IntroProject from "@/components/spaceLayout/IntroProject";
import Plates from "@/components/spaceLayout/Plates";
import useComponentStore from "@/lib/store/useComponentStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const EditPage = () => {
  const { spaceWallId, setSpaceWallId } = useSpaceWallStore();
  const { getSpaceComponents } = useComponentStore();
  const paramSpaceWallId = useParams().id;

  useEffect(() => {
    if (typeof paramSpaceWallId === "string") {
      if (spaceWallId !== parseInt(paramSpaceWallId)) {
        setSpaceWallId(parseInt(paramSpaceWallId));
      }
    }
  }, [spaceWallId, setSpaceWallId, paramSpaceWallId]);
  return (
    <Container>
      <IntroProject />
      <Plates />
      <DraggableBlocks
        blockData={Object.values(getSpaceComponents(spaceWallId as number))}
      />
    </Container>
  );
};

const Container = styled.div`
  gap: 18px;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fb;
`;

export default EditPage;
