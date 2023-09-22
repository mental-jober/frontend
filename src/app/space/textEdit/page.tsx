"use client";

import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { froalaEditorStore, useToastStore } from "@/lib/store/store.module";
import { ChangeEvent, useEffect, useState } from "react";

const TextEditPage = () => {
  const [titleText, setTitleText] = useState("");
  const { text } = froalaEditorStore();
  const [prevTitleText, setPrevTitleText] = useState("");
  const [prevText, setPrevText] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const { showToast } = useToastStore();

  useEffect(() => {
    const saveInterval = setInterval(() => {
      showToast("자동 저장 중...");
    }, 10000);

    return () => clearInterval(saveInterval);
  }, [showToast]);

  useEffect(() => {
    setIsBtnDisabled(
      !text || !titleText || (text === prevText && titleText === prevTitleText),
    );
  }, [text, titleText, prevText, prevTitleText]);

  const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleText(e.target.value);
  };

  const onSave = () => {
    console.log("onSave 함수 호출됨");
    console.log("titleText:", titleText);
    console.log("text:", text);

    if (!titleText || !text) {
      console.log("제목 또는 내용이 비어 있음");
      alert("제목 또는 내용이 비었습니다.");
      return;
    }
    setPrevTitleText(titleText);
    setPrevText(text);
  };

  return (
    <>
      <div className="flexable flex-col">
        <Header />
        <div className="mt-6 w-full">
          <textarea
            placeholder="이름을 입력해주세요."
            className="w-full h-[27px] border-0 p-0 text-[20px]"
            value={titleText}
            onChange={onTitleChange}
          />
        </div>
        <div className="mt-4">
          <TextEditor />
        </div>

        <div className="mt-8 w-full">
          <Button
            onClick={onSave}
            disabled={isBtnDisabled}
            {...(isBtnDisabled ? { $disabled: "true" } : { $save: "true" })}
          >
            확인
          </Button>
        </div>
      </div>
      <ToastUi />
    </>
  );
};

export default TextEditPage;
