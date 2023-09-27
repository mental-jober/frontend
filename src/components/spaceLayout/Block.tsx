import BlockLayout from "./block/BlockLayout";
import BlockTop from "./block/BlockTop";
import BlockBottom from "./block/BlockBottom";
import BlockMiddleLine from "./block/BlockMiddleLine";
import { BlockData } from "./SpaceProject";

interface BlockProps {
  data: BlockData;
}

const Block = ({ data }: BlockProps) => {
  return (
    <BlockLayout>
      <BlockTop name={data.name} />
      <BlockMiddleLine />
      <BlockBottom data={data} />
    </BlockLayout>
  );
};

export default Block;
