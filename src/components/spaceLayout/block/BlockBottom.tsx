import styled from "styled-components";
import { PiTrash } from "react-icons/pi";
import Chip from "../Chip";

interface BlockBottomProps {
  name: string;
}

export default function BlockBottom({ name }: BlockBottomProps) {
  return (
    <Bottom>
      <Chip name={name} />
      <BotRight>
        <StyledTrashIcon />
        <div>토글</div>
      </BotRight>
    </Bottom>
  );
}
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BotRight = styled.div`
  gap: 10px;
  display: flex;
`;

const StyledTrashIcon = styled(PiTrash)`
  color: #b5b5b5;
`;
