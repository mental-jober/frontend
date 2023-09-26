import styled from "styled-components";

const HistorySaved = () => {
  return <Text>저장됨</Text>;
};

const Text = styled.span`
  text-align: center;
  ${({ theme }) => `${theme.text.caption1.medium} ${theme.textColor.gray[500]}`}
  font-weight: 600;
`;

export default HistorySaved;
