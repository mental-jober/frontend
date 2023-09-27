import PlateIcon from "./Plate/PlateIcon";

interface ChipProps {
  name: string;
}

const Chip = ({ name }: ChipProps) => {
  return <PlateIcon isChip name={name}></PlateIcon>;
};

export default Chip;
