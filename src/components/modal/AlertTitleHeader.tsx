import { styled, css } from "styled-components";

interface AlertTitleHeaderProps {
  title: string;
  text?: string;
  $link?: boolean;
}

interface TitleProps {
  $link?: boolean;
}

const AlertTitleHeader = ({ title, text, $link }: AlertTitleHeaderProps) => {
  return (
    <TitleHeaderContainer>
      <Title $link={$link}>{title}</Title>
      <Contents>{text}</Contents>
    </TitleHeaderContainer>
  );
};

const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Title = styled.p<TitleProps>`
  width: 100%;
  ${({ theme }) => theme.text.title4.bold};
  text-align: center;
  color: ${({ theme }) => theme.textColor.gray[950]};
  font-size: 16px;

  ${(props) =>
    props.$link &&
    css`
      ${({ theme }) => theme.text.title4.bold};
      color: ${({ theme }) => theme.textColor.gray[950]};
    `}
`;

const Contents = styled.p`
  width: 296px;
  ${({ theme }) => theme.text.text1.medium}
  text-align: center;
  color: #747e8a;
  font-size: 14px;
  white-space: pre-line;
`;

export default AlertTitleHeader;
