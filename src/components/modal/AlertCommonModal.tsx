"use client";

import React, { ReactNode, useRef } from "react";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const AlertCommonModal = ({ isOpen, onClose, children }: CommonModalProps) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const modalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === modalRef.current) onClose();
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <div
        ref={modalRef}
        onClick={modalClose}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-[20px] w-[320px] py-6 px-[33px] flex justify-center items-center flex-col gap-[18px] shadow[0_0_18px_0__rgba(191,192,196,0.18)]">
          <div className="flex flex-col gap-[18px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AlertCommonModal;
