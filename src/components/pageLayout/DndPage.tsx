import React, { useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
  TreeItems,
} from "dnd-kit-sortable-tree";

export default function DndPage() {
  const [items, setItems] = useState(initialViableMinimalData);
  return (
    <SortableTree
      items={items}
      onItemsChanged={setItems}
      TreeItemComponent={TreeItem}
      indentationWidth={50}
    />
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
    <SimpleTreeItemWrapper {...props} ref={ref}>
      <div className={isOver || isOverParent ? "bg-[#f3f4f6]" : ""}>
        {props.item.value}
      </div>
      {isOver && <div className="bg-blue-400 h-1"></div>}
    </SimpleTreeItemWrapper>
  );
});
TreeItem.displayName = "TreeItem";
/*
 * Configure the tree data.
 */
const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
  {
    id: 1,
    value: "페이지 A",
    children: [
      { id: 4, value: "페이지 B" },
      { id: 5, value: "페이지 C" },
    ],
  },
  { id: 2, value: "페이지 D", children: [{ id: 6, value: "페이지 E" }] },
  { id: 3, value: "페이지 F" },
  {
    id: 7,
    value: "페이지 G",
    children: [
      { id: 9, value: "페이지 E" },
      { id: 10, value: "페이지 I" },
    ],
  },
  { id: 8, value: "페이지 H" },
];

