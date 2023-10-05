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
  parentId?: string;
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
      parentId: "page-1",
    },
    {
      id: "page-3",
      title: "페이지 C",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
      parentId: "page-1",
    },
    {
      id: "page-4",
      title: "페이지 D",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
      parentId: "page-1",
    },
    {
      id: "page-5",
      title: "페이지 E",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
      parentId: "page-1",
    },
    {
      id: "page-6",
      title: "페이지 F",
      templates: ["template-2-1", "template-2-2"],
      isExpanded: false,
      parentId: "page-1",
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

    if (!destination) return;

    const pages = Array.from(data.pages);
    const [movedPage] = pages.splice(source.index, 1);

    // 먼저, root 페이지가 하나만 남는 경우를 체크합니다.
    if (!movedPage.parentId) {
      const rootPages = pages.filter((page) => !page.parentId);
      if (rootPages.length === 1) {
        // 원상복귀
        pages.splice(source.index, 0, movedPage);
        setData({ ...data, pages });
        return;
      }
    }

    // 이동할 목적지 페이지 정보를 가져옵니다.
    const targetPage = pages[destination.index];

    if (targetPage) {
      if (movedPage.parentId === targetPage.parentId) {
        movedPage.parentId = targetPage.parentId;
      } else {
        // 상위 페이지로 이동
        if (!targetPage.parentId) {
          movedPage.parentId = undefined;
        } else {
          // 하위 페이지로 이동
          movedPage.parentId = targetPage.parentId;
        }
      }
    } else {
      // 이 경우는 상위 페이지로 이동하는 것으로 판단하고 parentId를 제거합니다.
      movedPage.parentId = undefined;
    }

    // 페이지 순서를 재배치합니다.
    // 상위 페이지로 이동하는 경우는 페이지 목록 맨 끝으로 이동합니다.
    if (movedPage.parentId === undefined) {
      pages.push(movedPage);
    } else {
      pages.splice(destination.index, 0, movedPage);
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
                    className={page.parentId ? "ml-4" : ""}
                  >
                    <button
                      {...provided.dragHandleProps}
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
