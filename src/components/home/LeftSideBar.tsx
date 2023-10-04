import Image from "next/image";
import { useState } from "react";
import { useModal } from "../../../hooks/UseModalHook";

interface Props {
  iconSrc: {
    document: string;
    shared: string;
  };
  handleClick: (type: "document" | "shared") => void;
}

const LeftSideBar: React.FC<Props> = ({ iconSrc, handleClick }) => {
  const { onOpenModal } = useModal();

  const toggleLogoutModal = () => {
    onOpenModal("Logout");
  };

  return (
    <div className="w-[74px] bg-foundation-grey-200 flex flex-col justify-between py-[14px]">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src="/home/home_1.svg"
          alt="홈"
          className=""
          width={47}
          height={47}
        />
        <hr className="w-[39px] border-t border-foundation-blue-200" />
        <Image
          src={`/home/${iconSrc.document}`}
          alt="문서스페이스"
          className="cursor-pointer"
          width={47}
          height={47}
          onClick={() => handleClick("document")}
        />
        <hr className="w-[39px] border-t border-foundation-blue-200" />
        <Image
          src={`/home/${iconSrc.shared}`}
          alt="공유스페이스"
          className="cursor-pointer"
          width={47}
          height={47}
          onClick={() => handleClick("shared")}
        />
        <hr className="w-[39px] border-t border-foundation-blue-200" />
        <Image
          src="/home/home_4.svg"
          alt="템플릿모음"
          className=""
          width={47}
          height={47}
        />
        <hr className="w-[39px] border-t border-foundation-blue-200" />
        <Image
          src="/home/home_5.svg"
          alt="계정"
          className=""
          width={47}
          height={47}
        />
      </div>
      <div className="flex justify-center items-center pb-10">
        <Image
          src="/home/logout.svg"
          alt="로그아웃"
          className="cursor-pointer"
          width={32}
          height={32}
          onClick={toggleLogoutModal}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
