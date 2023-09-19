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

export default function DraggableBlocks({ blockData }: DraggableBlocksProps) {
  const [tasks, setTasks] = useState<BlockData[]>(blockData);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ background: snapshot.isDraggingOver ? "aliceblue" : "" }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="task"
                  >
                    <Block name={task.name} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
