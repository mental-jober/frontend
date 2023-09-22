import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";

const LogoutModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader title="정말 로그아웃 하시겠습니까?" />
        <ButtonContainer>
          <Button $leftbtn="true" onClick={() => {}}>
            취소
          </Button>
          <Button $rightbtn="true" onClick={() => {}}>
            확인
          </Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default LogoutModal;
