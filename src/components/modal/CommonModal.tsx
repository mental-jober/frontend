"use client";

import React, { ReactNode, useRef } from "react";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  children: ReactNode;
}

const CommonModal = ({
  isOpen,
  onClose,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  children,
}: CommonModalProps) => {
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
        <div className="bg-white rounded-md w-[328px] py-7 px-4 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col ">
            <h2
              className={`text-xl font-bold text-center w-full  h-[27px] ${
                titleClassName || ""
              }`}
            >
              {title}
            </h2>
            <p className={`text-center ${subtitleClassName || ""}`}>
              {subtitle}
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
