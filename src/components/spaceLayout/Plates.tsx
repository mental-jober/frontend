import styled from "styled-components";
import PlateIcon from "./Plate/PlateIcon";
import PlateLayout from "./Plate/PlateLayout";
import PlateTitle from "./Plate/PlateTitle";
import { PLATE_CONFIG } from "@/lib/constants";

export default function Plates() {
  const names: string[] = Object.keys(PLATE_CONFIG);
  return <PlatesBox>{renderPlate(names)}</PlatesBox>;
}

const renderPlate = (names: string[]) => {
  return names.map((name) => (
    <PlateLayout key={name} name={name}>
      <PlateIcon name={name} />
      <PlateTitle name={name} />
    </PlateLayout>
  ));
};

const PlatesBox = styled.div`
  gap: 8px;
  width: 320px;
  height: 71px;
  display: flex;
  padding: 6px 10px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: #ecf1f7;
`;
