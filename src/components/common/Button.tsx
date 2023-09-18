import { css, styled } from "styled-components";

interface ButtonProps {
  [props: string]: any;
}

interface customProps {
  $normal?: boolean;
  $save?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<customProps>`
  padding: 10px 20px;
  background: ${({ theme }) => theme.gray.normal};
  border-radius: 4px;
  font-weight: 800;
  border: none;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.gray.normalHover};
  }

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
`;

export default Button;
