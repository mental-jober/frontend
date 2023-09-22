import Image from 'next/image';
import { useRef, MouseEvent } from "react";
import { PiX } from "react-icons/pi";

interface PreviewLayoutModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  title: string;
  description: string;
  imageSrc: string;
}

const PreviewLayoutModal = ({
  isOpen,
  onCloseModal,
  title,
  description,
  imageSrc,
}: PreviewLayoutModalProps) => {
  const modalRef = useRef(null);

  const modalClose = (e: MouseEvent) => {
    if (e.target === modalRef.current) {
      onCloseModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center mx-auto">
      <div
        ref={modalRef}
        onClick={modalClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-[10px] w-[320px] flex items-center flex-col px-5">
          <div
            onClick={onCloseModal}
            className="flex items-center h-10 py-[11px] self-stretch justify-end cursor-pointer"
          >
            <PiX className="w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center flex-col gap-[18px]">
            <div className="flex flex-col items-start justify-center w-[280px] gap-[10px]">
              <div className="w-[280px]">
                <p className="title4-bold">{title}</p>
              </div>
              <div className="w-[280px]">
                <p className="text1-medium text-foundation-grey-700">
                  {description}
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl border-2 border-solid border-foundation-grey-100 overflow-y-auto thin-scrollbar">
                <Image src={imageSrc} alt="예시 이미지"  className="absolute top-[0px] left-[0px] w-full h-auto" width={0} height={0} sizes="100vw"/>
              </div>
            </div>
            <div className="flexable w-full px-5 mb-[34px]">
              <button
                className="flexable w-[280px] h-[44px] shrink-0 text2-medium text-white rounded-[10px] bg-foundation-blue-300 shadow-[0px_0px_18px_0px_rgba(83,120,230,0.18)]"
              >
                사용하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewLayoutModal;
