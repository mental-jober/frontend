"use client";

import BlockLayout from "./block/BlockLayout";
import BlockTop from "./block/BlockTop";
import BlockBottom from "./block/BlockBottom";
import BlockMiddleLine from "./block/BlockMiddleLine";
import { ComponentData } from "@/lib/store/useComponentStore";

interface BlockProps {
  data: ComponentData;
}

const Block = ({ data }: BlockProps) => {
  return (
    <BlockLayout>
      <BlockTop name={data.type} />
      <BlockMiddleLine />
      <BlockBottom data={data} />
    </BlockLayout>
  );
};

export default Block;
