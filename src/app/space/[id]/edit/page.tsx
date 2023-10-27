"use client";

import DraggableBlocks from "@/components/spaceLayout/DraggableBlocks";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import IntroProject from "@/components/spaceLayout/IntroProject";
import Plates from "@/components/spaceLayout/Plates";
import { createBlock } from "@/lib/api/spaceEditAPI";
import { useToastStore } from "@/lib/store/store.module";
import useComponentStore, {
  ComponentData,
} from "@/lib/store/useComponentStore";
import { useIsNewSpaceStore } from "@/lib/store/useIsNewSpace";
import { usePageLayoutStore } from "@/lib/store/usePageLayoutStore";
import useSpaceStore, { SpaceData } from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import {
  useEnterEditQuery,
  useSpaceTempSaveQuery,
  useSpaceTempViewQuery,
} from "@/queries/queries";
import ToastUi from "@/components/toast/ToastUi";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const EditPage = () => {
  const { spaceWallId, setSpaceWallId } = useSpaceWallStore();
  const { addData, getData } = useSpaceStore();
  const { getSpaceComponents, setSpaceComponents } = useComponentStore();
  const { isNewSpace, setIsNewSpace } = useIsNewSpaceStore();
  const { data: tempData } = useSpaceTempViewQuery(spaceWallId as number);
  const { showToast } = useToastStore();

  const spaceTempSaveQueryOption = {
    refetchInterval: 10000,
    onSuccess: () => {
      showToast("임시 저장 중 입니다.");
    },
  };
  useSpaceTempSaveQuery(
    spaceWallId as number,
    getData(spaceWallId as number) as SpaceData,
    spaceTempSaveQueryOption,
  );
  const paramSpaceWallId = useParams().id;
  const { type, composition } = usePageLayoutStore();
  const enterEditQueryOption = {
    refetchOnWindowFocus: false,
  };

  const { isSuccess } = useEnterEditQuery(
    paramSpaceWallId as string,
    enterEditQueryOption,
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
      if (isNewSpace) {
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
              setIsNewSpace(false);
            }
          }
        }
      }
    };

    if (tempData) {
      addData(spaceWallId as number, tempData.data);
      tempData.data.componentTempList.forEach((component: ComponentData) => {
        setSpaceComponents(
          spaceWallId as number,
          component.componentTempId,
          component,
        );
      });
    } else {
      onCreateLayoutComponents();
    }
  }, [
    spaceWallId,
    addData,
    tempData,
    composition,
    getSpaceComponents,
    setSpaceComponents,
    paramSpaceWallId,
    isSuccess,
    isNewSpace,
    setIsNewSpace,
  ]);

  return (
    <>
      <Container>
        {type === "프로젝트형" ? <IntroProject /> : <IntroProfile />}
        <Plates />
        <DraggableBlocks blockData={filteredBlockData} />
      </Container>
      <ToastUi />
    </>
  );
};

const Container = styled.div`
  gap: 18px;
  width: 100%;
  display: flex;
  max-width: 430px;
  min-width: 360px;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fb;
`;

export default EditPage;
