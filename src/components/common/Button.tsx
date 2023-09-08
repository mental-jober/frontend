import { styled } from "styled-components";

interface ButtonProps {
  [rest: string]: any;
}

const Button = ({ rest }: ButtonProps) => {
  return <StyledButton {...rest} />;
};

const StyledButton = styled.button`
  padding: 20px;
`;

export default Button;
