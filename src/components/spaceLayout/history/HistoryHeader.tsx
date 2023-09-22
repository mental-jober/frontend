import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";
import styled from "styled-components";

interface HistoryHeaderProps {
  isOpen: boolean;
  onClick: () => void;
}

const HistoryHeader = ({ isOpen, ...rest }: HistoryHeaderProps) => {
  return (
    <Wrapper {...rest}>
      {isOpen ? <StyledUpArrow /> : <StyledDownArrow />}
      <Contents>
        <Time>7월 25일 오전 12:53</Time>
        <Status>현재 작업중</Status>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 10px;
  width: 360px;
  height: 58px;
  display: flex;
  cursor: pointer;
  padding: 15px 20px;
  align-items: center;
  justify-content: space-between;
`;

const StyledUpArrow = styled(PiCaretUpFill)`
  width: 20px;
  height: 20px;
  ${({ theme }) => theme.textColor.blue[300]};
`;

const StyledDownArrow = styled(PiCaretDownFill)`
  width: 20px;
  height: 20px;
  ${({ theme }) => theme.textColor.blue[300]};
`;

const Contents = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const Status = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export default HistoryHeader;
