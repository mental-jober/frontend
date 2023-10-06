import useSpaceStore from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const IntroProjectText = () => {
  const [text, setText] = useState<string>("제목을 입력해주세요");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { spaceWallId } = useSpaceWallStore();
  const { getValue, setValue } = useSpaceStore();

  const onClickText = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onEditComplete = () => {
    setIsEditing(false);
    if (getValue(spaceWallId as number, "title") !== text) {
      setValue(spaceWallId as number, "title", text);
    }
  };

  const onEnterDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEditComplete();
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <TextAreaBlock>
      <TextAreaContent>
        {isEditing ? (
          <TextInput
            type="text"
            value={text === "제목을 입력해주세요" ? "" : text}
            onBlur={onEditComplete}
            onKeyDown={onEnterDown}
            onChange={onChangeInput}
            ref={inputRef}
          />
        ) : (
          <Text placeholder="제목을 입력해주세요" onClick={onClickText}>
            {text}
          </Text>
        )}
      </TextAreaContent>
    </TextAreaBlock>
  );
};

const TextAreaBlock = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  max-width: 430px;
  align-items: center;
  justify-content: center;
`;

const TextAreaContent = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  padding: 0 10px;
  align-items: center;
  word-spacing: -1.6px;
`;

const Text = styled.span`
  width: 100%;
  ${({ theme }) => `${theme.text.title2.bold} ${theme.textColor.gray[400]}`}
`;

const TextInput = styled.input`
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: transparent;
  ${({ theme }) => `${theme.text.title2.bold} ${theme.textColor.gray[400]}`}
`;

export default IntroProjectText;
