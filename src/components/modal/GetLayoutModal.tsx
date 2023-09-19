import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
  LeftButton,
  RightButton,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

const GetLayoutModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="레이아웃 가져오기"
          text="입력된 내용을 삭제하고 선택한 레이아웃을 적용 하시겠습니까?"
        />
        <ButtonContainer>
          <LeftButton name="취소" onClick={onCloseModal} />
          <RightButton name="적용하기" onClick={() => {}} />
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default GetLayoutModal;
