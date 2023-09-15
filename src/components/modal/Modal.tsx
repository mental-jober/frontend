"use client";

import AlertCommonModal from "./AlertCommonModal";

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
}

interface TitleHeaderProps {
  title: string;
  text: string;
}

interface ButtonProps {
  name1?: string;
  name2?: string;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
}

const TitleHeader = ({ title, text }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[6px]">
      <p className="w-[264px] title4-bold text-center text-[#1A1A1A]">
        {title}
      </p>
      <p className="text1-medium w-[264px] text-center text-[#747E8A]">
        {text}
      </p>
    </div>
  );
};

const Button1 = ({ onButton1Click }: ButtonProps) => {
  return (
    <button
      onClick={onButton1Click}
      className="subhead2-semibold flex w-[280px] py-[15px] justify-center items-center rounded-[10px] bg-[#2593FC] border-0 text-white"
    >
      확인
    </button>
  );
};

const Button2 = ({
  name1,
  name2,
  onButton1Click,
  onButton2Click,
}: ButtonProps) => {
  return (
    <div className="w-[264px] flex justify-center items-center gap-3">
      <button
        onClick={onButton1Click}
        className="subhead2-semibold flex h-10 py-[10px] items-center px-6 gap-2 rounded-[10px] bg-[#E9F4FF] text-[#2593FC]"
      >
        {name1}
      </button>
      <button
        onClick={onButton2Click}
        className="subhead2-semibold flex h-10 py-[10px] px-6 items-center gap-2 rounded-[10px] bg-[#2593FC] text-white shadow[0_0_18px_0__rgba(83,120,230,0.18)]"
      >
        {name2}
      </button>
    </div>
  );
};

export const NotFoundMemberModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
        <TitleHeader
          title="찾을 수 없는 회원입니다."
          text="해당 이메일은 자버의 회원이 아닙니다. 이메일을 확인해주세요."
        />
        <Button1 onButton1Click={onCloseModal} />
      </AlertCommonModal>
    </>
  );
};

export const DeletePermissonModal = ({
  isOpen,
  onCloseModal,
  onButton2Click,
}: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
      <TitleHeader
        title="권한 삭제"
        text="이 계정에 대한 권한을 삭제하시겠습니까?"
      />
      <Button2
        name1="취소"
        name2="삭제하기"
        onButton1Click={onCloseModal}
        onButton2Click={onButton2Click}
      />
    </AlertCommonModal>
  );
};

export const GetLayoutModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
        <TitleHeader
          title="레이아웃 가져오기"
          text="입력된 내용을 삭제하고 선택한 레이아웃을 적용 하시겠습니까?"
        />
        <Button2 name1="취소" name2="적용하기" onButton1Click={onCloseModal} />
      </AlertCommonModal>
    </>
  );
};

export const PermissionSettingAfterModal = ({
  isOpen,
  onCloseModal,
}: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
        <TitleHeader
          title="일부공개를 선택했습니다."
          text="페이지를 공개할 사람을 초대해주세요."
        />
        <Button1 onButton1Click={onCloseModal} />
      </AlertCommonModal>
    </>
  );
};

export const PublicScopeModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
        <TitleHeader
          title="전체 공개로 변경하시겠습니까?"
          text="게스트로 지정된 권한이 사라집니다. 
          그래도 전체 공개로 변경하시겠습니까?"
        />
        <Button2 name1="취소" name2="변경하기" onButton1Click={onCloseModal} />
      </AlertCommonModal>
    </>
  );
};

export const ExitPageModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onClose={onCloseModal}>
        <TitleHeader
          title="페이지를 나가시겠습니까?"
          text="저장하지 않으면 작성된 내용이 <초기화> 됩니다!"
        />
        <Button2
          name1="머무르기"
          name2="나가기"
          onButton1Click={onCloseModal}
        />
      </AlertCommonModal>
    </>
  );
};
