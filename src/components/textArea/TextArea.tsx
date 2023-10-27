"use client";

import React, { ChangeEvent } from "react";
import style from "./TextArea.module.css";
import useSpaceStore from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";

export const SpaceNameInput = () => {
  const { getValue, setValue } = useSpaceStore();
  const { spaceWallId } = useSpaceWallStore();
  const title = getValue(spaceWallId as number, "title");

  const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    setValue(spaceWallId as number, "title", inputText);
  };

  return (
    <div className="mt-4">
      <textarea
        value={title ? title : ""}
        onChange={onTitleChange}
        placeholder="스페이스 이름을 입력해주세요."
        className={`${style.SpaceNametextarea} w-full h-[45px] bg-[#ECF1F7] rounded-lg border-0 p-0`}
      />
    </div>
  );
};

export const MyTextInput = () => {
  const { getValue, setValue } = useSpaceStore();
  const { spaceWallId } = useSpaceWallStore();
  const text = getValue(spaceWallId as number, "description");

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= 100) {
      setValue(spaceWallId as number, "description", inputText);
    }
  };

  return (
    <div className="mt-4">
      <textarea
        value={text ? text : ""}
        onChange={onTextChange}
        placeholder="소개글을 입력해주세요.(최대 100자)"
        className={`${style.Mytextarea} w-full h-[172px] bg-[#ECF1F7;] rounded-lg border-0 p-0`}
      />
    </div>
  );
};
