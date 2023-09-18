import { styled } from "styled-components";

interface InputProps {
  [props: string]: any;
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  border-radius: 16px;
  padding: 10px 16px;
  width: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.gray[2]};
  &::placeholder {
    color: ${({ theme }) => theme.gray[4]};
  }
  &:focus {
    color: ${({ theme }) => theme.gray[4]};
  }
`;

export default Input;
