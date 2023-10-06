import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 9997;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  background: ${(props) => props.theme.color.gray[0]};
  border-radius: 20px;
  width: 320px;
  padding: 24px 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 0 18px 0 rgba (191, 192, 196, 0.18);
  z-index: 9998;
`;

export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  z-index: 9995;
`;

export const ModalClose = styled.div`
  display: flex;
  width: 280px;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
`;

export const BtnContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
