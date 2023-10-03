import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "../common/Button";
import { useModal } from "../../../hooks/UseModalHook";

const GetLayoutModal = () => {
  const { isOpen, onCloseModal, type } = useModal();

  const isModalOpen = isOpen && type === "GetLayout";

  return (
    <>
      <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="레이아웃 가져오기"
          text={`레이아웃을 적용하면 입력된 내용이 삭제됩니다.\n이 레이아웃을 적용하시겠습니까?`}
        />
        <ButtonContainer>
          <Button $leftbtn onClick={() => {}}>
            취소
          </Button>
          <Button $rightbtn onClick={() => {}}>
            적용하기
          </Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default GetLayoutModal;
