"use client";

import { ReactNode, useRef } from "react";
import styled from "styled-components";

interface CommonModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

export const AlertCommonModal = ({
  isOpen,
  onCloseModal,
  children,
}: CommonModalProps) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const modalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === modalRef.current) onCloseModal();
  };

  return (
    <ModalContainer>
      <ModalOverlay ref={modalRef} onClick={modalClose}>
        <ModalBox>
          <ModalContents>{children}</ModalContents>
        </ModalBox>
      </ModalOverlay>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 320px;
  padding: 24px 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 0 18px 0 rgba (191, 192, 196, 0.18);
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ButtonContainer = ({ children }: { children: ReactNode }) => {
  return <BtnContainer>{children}</BtnContainer>;
};

const BtnContainer = styled.div`
  width: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
