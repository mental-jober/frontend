"use client";

import React, { useState, ChangeEvent } from "react";
import style from "./TextArea.module.css";

export const MyTextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= 100) {
      setText(inputText);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="소개글을 입력해주세요.&#13;&#10;(최대 100자)"
        className={`${style.Mytextarea} w-full min-w-[357px] h-[172px] bg-[#F5F5F5] rounded-lg`}
      ></textarea>
      <div className="text-right mt-3 h-[23px]">({text.length}/100)</div>
    </div>
  );
};

export const SpaceNametextarea = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    setText(inputText);
  };

  return (
    <div className="mt-[23px]">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="스페이스 이름을 입력해주세요."
        className={`${style.SpaceNametextarea} w-full min-w-[357px] h-[45px] bg-[#F5F5F5] rounded-lg`}
      ></textarea>
    </div>
  );
};
