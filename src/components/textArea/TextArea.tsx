"use client";

import React, { ChangeEvent } from "react";
import style from "./TextArea.module.css";
import { profileStore } from "@/lib/store/store.module";

export const SpaceNameInput = () => {
  const { profileTitle, setProfileTitle } = profileStore();

  const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    setProfileTitle(inputText);
  };

  return (
    <div className="mt-4">
      <textarea
        value={profileTitle}
        onChange={onTitleChange}
        placeholder="스페이스 이름을 입력해주세요."
        className={`${style.SpaceNametextarea} w-full h-[45px] bg-[#ECF1F7] rounded-lg border-0 p-0`}
      />
    </div>
  );
};

export const MyTextInput = () => {
  const { profileText, setProfileText } = profileStore();

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= 100) {
      setProfileText(inputText);
    }
  };

  return (
    <div className="mt-4">
      <textarea
        value={profileText}
        onChange={onTextChange}
        placeholder="소개글을 입력해주세요.(최대 100자)"
        className={`${style.Mytextarea} w-full h-[172px] bg-[#ECF1F7;] rounded-lg border-0 p-0`}
      />
    </div>
  );
};
