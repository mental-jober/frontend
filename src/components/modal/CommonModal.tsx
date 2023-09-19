"use client";

import { ReactNode, useRef } from "react";

interface CommonModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

export const AlertCommonModal = ({
  isOpen,
  onCloseModal,
  children,
}: CommonModalProps) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const modalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === modalRef.current) onCloseModal();
  };

  return (
    <div className="flexable mx-auto">
      <div
        ref={modalRef}
        onClick={modalClose}
        className="fixed inset-0 flexable z-50 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-[20px] w-[320px] py-6 px-[33px] flexable flex-col gap-[18px] shadow[0_0_18px_0__rgba(191,192,196,0.18)]">
          <div className="flex flex-col gap-[18px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const Button = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="subhead2-semibold flex w-[280px] py-[15px] justify-center items-center rounded-[10px] bg-[#2593FC] border-0 text-white shadow-[0px_0px_18px_0px_rgba(83,120,230,0.18)]"
    ></button>
  );
};

export const LeftButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="subhead2-semibold flex h-10 py-[10px] items-center px-6 gap-2 rounded-[10px] bg-[#E9F4FF] text-[#2593FC]"
    >
      {name}
    </button>
  );
};

export const RightButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="subhead2-semibold flex h-10 py-[10px] px-6 items-center gap-2 rounded-[10px] bg-[#2593FC] text-white shadow[0_0_18px_0__rgba(83,120,230,0.18)]"
    >
      {name}
    </button>
  );
};

export const ButtonContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[264px] flex justify-center items-center gap-3">
      {children}
    </div>
  );
};
