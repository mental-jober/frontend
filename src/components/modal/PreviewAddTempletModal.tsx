import styled from "styled-components";
import { ModalContainer, ModalOverlay } from "./ModalParts";

const PreviewAddTempletModal = () => {
  return (
    <>
      <ModalContainer>
        <ModalOverlay>
          <PreviewTempletModalBox></PreviewTempletModalBox>
        </ModalOverlay>
      </ModalContainer>
    </>
  );
};

const PreviewTempletModalBox = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: ${(props) => props.theme.color.gray[0]};
  box-shadow: 0px 0px 18px 0px rgba(191, 192, 196, 0.18);
`;

export default PreviewAddTempletModal;
