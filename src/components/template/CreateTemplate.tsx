import { styled } from "styled-components";

const CreateTemplate = () => {
  return (
    <CreateTemplateBlock>
      <CreateTemplateContent>템플릿 제작하기</CreateTemplateContent>
    </CreateTemplateBlock>
  );
};

const CreateTemplateBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
`;

// Todo: Link 컴포넌트로 변경
const CreateTemplateContent = styled.span`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

export default CreateTemplate;
