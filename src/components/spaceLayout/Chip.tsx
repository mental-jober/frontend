import PlateIcon from "./Plate/PlateIcon";

interface ChipProps {
  name: string;
}

export default function Chip({ name }: ChipProps) {
  return <PlateIcon isChip name={name}></PlateIcon>;
}
