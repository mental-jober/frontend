import BlockLayout from "./block/BlockLayout";
import BlockTop from "./block/BlockTop";
import BlockBottom from "./block/BlockBottom";
import BlockLine from "./block/BlockLine";

interface BlockProps {
  name: string;
}

export default function Block({ name }: BlockProps) {
  return (
    <BlockLayout>
      <BlockTop name={name} />
      <BlockLine />
      <BlockBottom name={name} />
    </BlockLayout>
  );
}
