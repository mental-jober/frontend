import { ReactNode } from "react";
import { styled } from "styled-components";

interface TemplateListProps {
  children: ReactNode;
}

const TemplateList = ({ children }: TemplateListProps) => {
  return (
    <TemplateListBlock>
      <TemplateListContent>{children}</TemplateListContent>
    </TemplateListBlock>
  );
};

const TemplateListBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  padding: 0 20px;
`;

const TemplateListContent = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default TemplateList;
