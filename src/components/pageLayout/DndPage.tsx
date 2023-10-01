"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

type Page = {
  id: string;
  title: string;
  templates: string[];
  isExpanded: boolean;
};

type Template = {
  id: string;
  title: string;
};

type InitialData = {
  pages: Page[];
  templates: { [key: string]: Template };
};

const initialData: InitialData = {
  pages: [
    { id: "page-1", title: "페이지 A", templates: [], isExpanded: false },
    {
      id: "page-2",
      title: "페이지 B",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
    },
    {
      id: "page-3",
      title: "페이지 C",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
    },
    {
      id: "page-4",
      title: "페이지 D",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
    },
    {
      id: "page-5",
      title: "페이지 E",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
    },
    {
      id: "page-6",
      title: "페이지 F",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
    },
    // ... (나머지 페이지와 템플릿)
  ],
  templates: {
    "template-2-1": { id: "template-2-1", title: "템플릿2-1" },
    "template-2-2": { id: "template-2-2", title: "템플릿2-2" },
    // ... (나머지 템플릿)
  },
};

function DndPage() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
  
    if (!destination) return; // 드롭 위치가 없는 경우
  
    const pages = Array.from(data.pages);
    const [reorderedPage] = pages.splice(source.index, 1);
  
    // 상위 페이지와 하위 페이지 간 교환 로직
    if (source.index === 0 && destination.index > 0) {
      // 상위 페이지를 하위 페이지로 드래그하는 경우
      const topPage = pages[0];
      pages.splice(destination.index - 1, 0, reorderedPage); // 인덱스 조정
      pages[0] = topPage;
    } else if (destination.index === 0 && source.index > 0) {
      // 하위 페이지를 상위 페이지로 드래그하는 경우
      const prevTopPage = pages[0];
      pages[0] = reorderedPage;
      pages.splice(source.index, 0, prevTopPage);
    } else {
      // 일반적인 드래그&드롭
      pages.splice(destination.index, 0, reorderedPage);
    }
  
    setData({ ...data, pages });
  };

  const togglePageExpand = (pageId: string) => {
    setData((prevData) => {
      const newPages = prevData.pages.map((page) => {
        if (page.id === pageId) {
          return { ...page, isExpanded: !page.isExpanded };
        }
        return page;
      });
      return { ...prevData, pages: newPages };
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-pages" type="PAGE">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {data.pages.map((page, index) => (
              <Draggable key={page.id} draggableId={page.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className={index === 0 ? "font-bold" : "ml-4"}
                  >
                    <span {...provided.dragHandleProps}>
                      {/* 토글 아이콘 */}
                      <button
                        onClick={() => {
                          if (page.templates.length > 0) {
                            togglePageExpand(page.id);
                          }
                        }}
                      >
                        {page.isExpanded ? "▼" : "▶"}
                      </button>
                      {/* 페이지 이름 */}
                      {page.title}
                    </span>

                    {/* 템플릿 목록 */}
                    {page.isExpanded &&
                      page.templates.map((templateId: string) => {
                        const template: Template | undefined =
                          data.templates[templateId];
                        if (template) {
                          return (
                            <div key={template.id} className="ml-4">
                              {template.title}
                            </div>
                          );
                        }
                        return null;
                      })}
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

export default DndPage;
