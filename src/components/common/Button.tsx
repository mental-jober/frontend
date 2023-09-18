import { css, styled } from "styled-components";

interface ButtonProps {
  [props: string]: any;
}

interface customProps {
  $normal?: boolean;
  $save?: boolean;
  $modalbtn?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<customProps>`
  padding: 10px 20px;
  background: ${({ theme }) => theme.gray[0]};
  border-radius: 4px;
  font-weight: 600;
  border: none;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.gray[1]};
  }
  /* props 이름 앞에 $ 명시해야 경고가 뜨지 않습니다! */
  /* $: 임의의 props를 DOM까지 전달하게 만들어줍니다.*/
  /* 실 사용은 app/page.tsx를 참고해주세요! */
  ${(props) =>
    props.$normal &&
    css`
      padding: 30px; // $normal일 때의 padding
      background: ${(props) => props.theme.blue[3]};
    `}

  ${(props) =>
    props.$save &&
    css`
      display: flex;
      width: 320px;
      height: 50px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 10px;
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: ${(props) => props.theme.blue[3]};
    `}
    
  ${(props) =>
    props.$modalbtn &&
    css`
      background: ${({ theme }) => theme.button.bgColor};
      color: #fff;
    `}
`;

export default Button;
