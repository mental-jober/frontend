"use client";

import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Block from "./Block";
import useComponentStore, {
  ComponentData,
} from "@/lib/store/useComponentStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";

interface DraggableBlocksProps {
  blockData: ComponentData[];
}

const DraggableBlocks = ({ blockData }: DraggableBlocksProps) => {
  const [datas, setDatas] = useState<ComponentData[]>(blockData);
  const { setComponentValue, getSpaceComponents } = useComponentStore();
  const { spaceWallId } = useSpaceWallStore();

  useEffect(() => {
    setDatas(blockData);
  }, [blockData]);

  // 적용시 dnd 이전 상태로 돌아가버리는 문제

  // useEffect(() => {
  //   datas.forEach((component) => {
  //     setComponentValue(
  //       spaceWallId as number,
  //       component.componentTempId,
  //       "sequence",
  //       component.sequence,
  //     );
  //   });
  // }, [datas, setComponentValue, spaceWallId]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedDatas = datas;
    const [reorderedDatas] = updatedDatas.splice(source.index, 1);
    updatedDatas.splice(destination.index, 0, reorderedDatas);
    const reorderdComponents = Object.values(updatedDatas).map(
      (reorderedComponent, index) => {
        setComponentValue(
          spaceWallId as number,
          reorderedComponent.componentTempId,
          "sequence",
          index,
        );
        return { ...reorderedComponent, sequence: index };
      },
    );
    setDatas(reorderdComponents);

    console.log(getSpaceComponents(spaceWallId as number));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {datas.map((data, idx) => (
              <>
                <Draggable
                  key={data.componentTempId}
                  draggableId={data.componentTempId.toString()}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={{
                        marginBottom: "10px",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <Block data={data} />
                    </div>
                  )}
                </Draggable>
              </>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableBlocks;
