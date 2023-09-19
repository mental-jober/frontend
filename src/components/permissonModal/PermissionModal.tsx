import { useRef, MouseEvent, useState, useEffect, ChangeEvent } from "react";
import { PiX } from "react-icons/pi";

type Choice = {
  value: string;
  title: string;
  description: string;
};

interface PermissionModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  choicesData: Choice[];
}

const PermissionModal = ({
  isOpen,
  onCloseModal,
  choicesData,
}: PermissionModalProps) => {
  const modalRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setIsBtnDisabled(!inputValue);
  }, [inputValue]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (!isOpen) return null;

  const modalClose = (e: MouseEvent) => {
    if (e.target === modalRef.current) {
      onCloseModal();
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <div
        ref={modalRef}
        onClick={modalClose}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
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
                <p className="title4-bold">이메일</p>
              </div>
              <div className="w-[280px]">
                <p className="text1-medium text-foundation-grey-700">
                  권한을 부여할 사용자의 이메일을 입력하세요.
                </p>
              </div>
              <input
                placeholder="이메일을 입력하세요."
                className="flexable w-full h-[45px] bg-foundation-grey-200 rounded-2xl p-0 border-0 text2-medium pl-5 box-border"
                value={inputValue}
                onChange={onInputChange}
              />
              {choicesData.map((choice, index) => (
                <div
                  key={index}
                  className={`flex w-[277px] px-[15px] py-[10px] items-center gap-[26px] ${
                    index !== choicesData.length - 1
                      ? "border-b border-solid border-foundation-grey-200"
                      : ""
                  }`}
                >
                  <div className="w-[38px] h-[38px] flexable p-[7px]">
                    <input
                      type="checkbox"
                      value={choice.value}
                      className="h-7 w-7"
                    />
                  </div>
                  <div className="gap-[2px]">
                    <p className="text2-medium flex w-[198px] h-[18px] flex-col justify-center">
                      {choice.title}
                    </p>
                    <p className="caption1-medium w-[198px] text-foundation-grey-700 overflow-hidden text-ellipsis whitespace-pre-line">
                      {choice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flexable w-full px-5 mb-[34px] ">
              <button
                disabled={isBtnDisabled}
                className={`flexable w-[280px] h-[44px] shrink-0 text2-medium text-white rounded-[10px] ${
                  isBtnDisabled
                    ? "bg-foundation-grey-300 cursor-not-allowed"
                    : "bg-foundation-blue-300"
                } shadow-[0px_0px_18px_0px_rgba(83,120,230,0.18)]`}
              >
                페이지 권한 초대
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;
