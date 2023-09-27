import styled from "styled-components";

import { getKRPlateTitle } from "@/lib/utils";

interface PlateTitleProps {
  name: string;
}

const PlateTitle = ({ name }: PlateTitleProps) => {
  return <Title>{getKRPlateTitle(name)}</Title>;
};

const Title = styled.span`
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
`;
export default PlateTitle;
