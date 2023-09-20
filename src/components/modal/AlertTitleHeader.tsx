import styled from "styled-components";

interface AlertTitleHeaderProps {
  title: string;
  text: string;
}

const AlertTitleHeader = ({ title, text }: AlertTitleHeaderProps) => {
  return (
    <TitleHeaderContainer>
      <Title className="title4-bold">{title}</Title>
      <Contents className="text1-medium">{text}</Contents>
    </TitleHeaderContainer>
  );
};

const Title = styled.p`
  width: 100%;
  text-align: center;
  color: #1a1a1a;
`;

const Contents = styled.p`
  width: 100%;
  text-align: center;
  color: #747e8a;
`;

const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
export default AlertTitleHeader;
