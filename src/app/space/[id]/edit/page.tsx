"use client";

import DraggableBlocks from "@/components/spaceLayout/DraggableBlocks";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import IntroProject from "@/components/spaceLayout/IntroProject";
import Plates from "@/components/spaceLayout/Plates";
import { createBlock } from "@/lib/api/spaceEditAPI";
import useComponentStore from "@/lib/store/useComponentStore";
import { usePageLayoutStore } from "@/lib/store/usePageLayoutStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { useEnterEditQuery } from "@/queries/queries";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const EditPage = () => {
  const { spaceWallId, setSpaceWallId } = useSpaceWallStore();
  const { getSpaceComponents, setSpaceComponents } = useComponentStore();
  const paramSpaceWallId = useParams().id;
  const { type, composition } = usePageLayoutStore();
  const queryOption = { refetchOnWindowFocus: false };
  const { isSuccess } = useEnterEditQuery(
    paramSpaceWallId as string,
    queryOption,
  );

  const filteredBlockData = Object.values(
    getSpaceComponents(spaceWallId as number),
  )
    .filter((component) => !component.deleted)
    .sort((a, b) => a.sequence - b.sequence);

  useEffect(() => {
    if (typeof paramSpaceWallId === "string") {
      if (spaceWallId !== parseInt(paramSpaceWallId)) {
        setSpaceWallId(parseInt(paramSpaceWallId));
      }
    }
  }, [spaceWallId, setSpaceWallId, paramSpaceWallId]);

  useEffect(() => {
    const onCreateLayoutComponents = async () => {
      for (const type of composition) {
        if (typeof paramSpaceWallId === "string") {
          const blockData = {
            spaceWallId: parseInt(paramSpaceWallId),
            type: type,
            sequence: Object.values(
              getSpaceComponents(parseInt(paramSpaceWallId)),
            ).length,
          };

          if (isSuccess) {
            const { data } = await createBlock(
              parseInt(paramSpaceWallId),
              blockData,
            );
            setSpaceComponents(
              parseInt(paramSpaceWallId),
              data.componentTempId,
              data,
            );
          }
        }
      }
    };

    onCreateLayoutComponents();
  }, [
    composition,
    getSpaceComponents,
    setSpaceComponents,
    paramSpaceWallId,
    isSuccess,
  ]);

  return (
    <Container>
      {type === "프로젝트형" ? <IntroProject /> : <IntroProfile />}
      <Plates />
      <DraggableBlocks blockData={filteredBlockData} />
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
