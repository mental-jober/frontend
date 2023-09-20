import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";

const GetLayoutModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="레이아웃 가져오기"
          text="입력된 내용을 삭제하고 선택한 레이아웃을 적용 하시겠습니까?"
        />
        <ButtonContainer>
          <Button $leftbtn="true">취소</Button>
          <Button $rightbtn="true">적용하기</Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default GetLayoutModal;
