import styled from "styled-components";

const HistoryEditNow = () => {
  return (
    <Wrapper>
      <Dot></Dot>
      <Text>현재 작업중</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #2593fc;
`;

const Text = styled.span`
  text-align: center;
  ${({ theme }) => `${theme.text.caption1.medium} ${theme.textColor.gray[500]}`}
  font-weight: 600;
`;

export default HistoryEditNow;
