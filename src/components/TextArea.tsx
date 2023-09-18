"use client";

import React, { ChangeEvent } from "react";
import style from "./TextArea.module.css";
import useStore from "@/lib/store/store.module";

export const MyTextArea = () => {
  const { currentText, setCurrentText } = useStore();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= 100) {
      setCurrentText(inputText);
    }
  };

  return (
    <div>
      <textarea
        value={currentText}
        onChange={handleChange}
        placeholder="소개글을 입력해주세요.&#13;&#10;(최대 100자)"
        className={`${style.Mytextarea} w-full min-w-[357px] h-[172px] bg-[#F5F5F5] rounded-lg`}
      ></textarea>
      <div className="text-right mt-3 h-[23px]">({currentText.length}/100)</div>
    </div>
  );
};

export const SpaceNametextarea = () => {
  const { titleText, setTitleText } = useStore();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    setTitleText(inputText);
  };

  return (
    <div className="mt-[23px]">
      <textarea
        value={titleText}
        onChange={handleChange}
        placeholder="스페이스 이름을 입력해주세요."
        className={`${style.SpaceNametextarea} w-full min-w-[357px] h-[45px] bg-[#F5F5F5] rounded-lg`}
      ></textarea>
    </div>
  );
};
