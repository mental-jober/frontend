"use client";

import React, { ChangeEvent, useState } from "react";
import style from "./TextArea.module.css";

export const SpaceNameInput = () => {
  const [titleText, setTitleText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    setTitleText(inputText);
  };

  return (
    <div className="mt-4">
      <textarea
        value={titleText}
        onChange={handleChange}
        placeholder="스페이스 이름을 입력해주세요."
        className={`${style.SpaceNametextarea} w-full h-[45px] bg-[#ECF1F7] rounded-lg border-0 p-0`}
      />
    </div>
  );
};

export const MyTextInput = () => {
  const [titleText, setTitleText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= 100) {
      setTitleText(inputText);
    }
  };

  return (
    <div className="mt-4">
      <textarea
        value={titleText}
        onChange={handleChange}
        placeholder="소개글을 입력해주세요.(최대 100자)"
        className={`${style.Mytextarea} w-full h-[172px] bg-[#ECF1F7;] rounded-lg border-0 p-0`}
      />
    </div>
  );
};
