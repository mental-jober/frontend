import React, { useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
  TreeItems,
} from "dnd-kit-sortable-tree";
import Image from "next/image";

export default function DndPage() {
  const [items, setItems] = useState(initialViableMinimalData);
  return (
    <div className = "mx-[20px]">
      <div className="rounded-2xl bg-white shadow w-full h-[110px] px-5 flex justify-between items-start mb-6">
        <div className="flex flex-col mb-4">
          <div className="flex gap-2 items-center mb-1">
            <Image src={"/home/rocket.svg"} alt="로켓" width={22} height={22} />
            <p className='title2-bold'>공유 스페이스 이름</p>
          </div>
          <p className='text1-medium'>
            공유 스페이스 설명글이 들어가는 곳입니다.공유 스페이스 설명글이
            들어가는 곳입니다.공유 스페이스 설명글이 들어가는 곳입니다.
          </p>
        </div>
      </div>
      <SortableTree
        items={items}
        onItemsChanged={setItems}
        TreeItemComponent={TreeItem}
        indentationWidth={50}
      />
    </div>
  );
}

type MinimalTreeItemData = {
  value: string;
};
/*
 * Here's the component that will render a single row of your tree
 */
const TreeItem = React.forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<MinimalTreeItemData>
>((props, ref) => {
  const { isOver, isOverParent } = props;

  return (
    <>
      <SimpleTreeItemWrapper {...props} ref={ref}>
        <div className="font-bold">
          {props.item.value}
        </div>
        
      </SimpleTreeItemWrapper>
    </>
  );
});
TreeItem.displayName = "TreeItem";
/*
 * Configure the tree data.
 */
const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
  {
    id: 1,
    value: "페이지 이름",
    children: [
      { id: 4, value: "페이지 이름" },
      { id: 5, value: "페이지 이름" },
    ],
  },
  { id: 2, value: "페이지 이름", children: [{ id: 6, value: "페이지 이름" }] },
  { id: 3, value: "페이지 이름" },
  {
    id: 7,
    value: "페이지 이름",
    children: [
      { id: 9, value: "페이지 이름" },
      { id: 10, value: "페이지 이름" },
    ],
  },
  { id: 8, value: "페이지 이름" },
];
