"use client";

import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Block from "./Block";
import { BlockData } from "./SpaceProject";

interface DraggableBlocksProps {
  blockData: BlockData[];
}

const DraggableBlocks = ({ blockData }: DraggableBlocksProps) => {
  const [datas, setDatas] = useState<BlockData[]>(blockData);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedDatas = [...datas];
    const [reorderedDatas] = updatedDatas.splice(source.index, 1);
    updatedDatas.splice(destination.index, 0, reorderedDatas);

    setDatas(updatedDatas);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {datas.map((data, idx) => (
              <>
                <Draggable key={data.id} draggableId={data.id} index={idx}>
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
