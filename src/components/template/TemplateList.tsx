import { ReactNode } from "react";
import { styled } from "styled-components";

interface TemplateListProps {
  children: ReactNode;
}

const TemplateList = ({ children }: TemplateListProps) => {
  return <TemplateListBlock>{children}</TemplateListBlock>;
};

const TemplateListBlock = styled.ul`
  background: coral;
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default TemplateList;
