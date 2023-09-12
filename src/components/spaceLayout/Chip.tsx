import PlateIcon from "./Plate/PlateIcon";

interface ChipProps {
  name: string;
}

export function Chip({ name }: ChipProps) {
  return <PlateIcon isChip name={name}></PlateIcon>;
}
