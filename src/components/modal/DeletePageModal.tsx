import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "../common/Button";
import { useModal } from "../../../hooks/UseModalHook";

const DeletePageModal = () => {
  const { isOpen, onCloseModal, type } = useModal();

  const isModalOpen = isOpen && type === "DeletePage";

  return (
    <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="페이지를 삭제하시겠습니까?"
        text={`해당 페이지를 정말로 삭제하시겠습니까?\n페이지 복구는 불가합니다.`}
      />
      <ButtonContainer>
        <Button $leftbtn="true" onClick={() => {}}>
          취소
        </Button>
        <Button $rightbtn="true" onClick={() => {}}>
          삭제하기
        </Button>
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default DeletePageModal;
