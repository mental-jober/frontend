import React from "react";
import { AlertCommonModal, Button } from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

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
        <Button onClick={() => {}} />
      </AlertCommonModal>
    </>
  );
};

export default PermissionSettingAfterModal;
