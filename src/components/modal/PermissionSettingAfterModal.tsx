import React from "react";
import { AlertCommonModal } from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";
import styled from "styled-components";

export const PermissionSettingAfterModal = ({
  isOpen,
  onCloseModal,
}: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="일부공개를 선택했습니다."
          text="페이지를 공개할 사람을 초대해주세요."
        />
        <BtnContainer>
          <Button $confirm="true">확인</Button>
        </BtnContainer>
      </AlertCommonModal>
    </>
  );
};

const BtnContainer = styled.div`
  width: 100%;
`;

export default PermissionSettingAfterModal;
