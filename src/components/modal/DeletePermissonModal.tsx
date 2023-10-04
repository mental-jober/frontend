import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "../common/Button";
import { useModal } from "../../../hooks/UseModalHook";

const DeletePermissonModal = () => {
  const { isOpen, onCloseModal, type, data } = useModal();

  const isModalOpen = isOpen && type === "DeletePermission";

  const onDeleteConfirm = () => {
    if (data?.onDeleteConfirm) {
      data.onDeleteConfirm();
    }

    onCloseModal();
  };

  return (
    <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="권한 삭제"
        text="이 계정에 대한 권한을 삭제하시겠습니까?"
      />
      <ButtonContainer>
        <Button $leftbtn onClick={onCloseModal}>
          취소
        </Button>
        <Button $rightbtn onClick={onDeleteConfirm}>
          삭제하기
        </Button>
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default DeletePermissonModal;
