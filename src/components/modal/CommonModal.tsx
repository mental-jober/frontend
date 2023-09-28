"use client";

import { ReactNode, useRef, MouseEvent } from "react";
import {
  BtnContainer,
  ModalBox,
  ModalContainer,
  ModalContents,
  ModalOverlay,
} from "./ModalParts";

interface CommonModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
  [props: string]: any;
}

export const AlertCommonModal = ({
  isOpen,
  onCloseModal,
  children,
}: CommonModalProps) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const modalClose = (e: MouseEvent) => {
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

export const ButtonContainer = ({ children }: { children: ReactNode }) => {
  return <BtnContainer>{children}</BtnContainer>;
};
