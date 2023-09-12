import { css, styled } from "styled-components";

interface ButtonProps {
  [props: string]: any;
}

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<{ $normal?: boolean }>`
  padding: 10px 20px;
  background: ${({theme}) => theme.gray.normal};
  border-radius: 4px;
  font-weight: 800;
  border: none;
  outline: none;
  &:hover {
    background: ${({theme}) => theme.gray.normalHover};
  }
  /* props 이름 앞에 $ 명시해야 경고가 뜨지 않습니다! */
  /* $: 임의의 props를 DOM까지 전달하게 만들어줍니다.*/
  /* 실 사용은 app/page.tsx를 참고해주세요! */
  ${(props) =>
    props.$normal &&
    css`
      background: ${(props) => props.theme.blue[3]};
    `}
`;

export default Button;
