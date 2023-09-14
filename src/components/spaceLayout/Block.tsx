import BlockLayout from "./block/BlockLayout";
import BlockTop from "./block/BlockTop";
import BlockBottom from "./block/BlockBottom";
import BlockMiddleLine from "./block/BlockMiddleLine";

interface BlockProps {
  name: string;
}

export default function Block({ name }: BlockProps) {
  return (
    <BlockLayout>
      <BlockTop name={name} />
      <BlockMiddleLine />
      <BlockBottom name={name} />
    </BlockLayout>
  );
}
