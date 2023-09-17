import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function IntroProjectText() {
  const [text, setText] = useState<string>("제목을 입력해주세요");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickText = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onBlurInput = () => {
    setIsEditing(false);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && setIsEditing(false);
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
            onBlur={onBlurInput}
            onKeyDown={onEnter}
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
}

const TextAreaBlock = styled.div`
  width: 100%;
  max-width: 430px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextAreaContent = styled.div`
  width: 320px;
  padding: 0 10px;
  background-color: yellow;
  border-left: 2px solid #575e67;
`;

const Text = styled.span`
  color: #aebdcf;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.44px;
`;

const TextInput = styled.input`
  color: #aebdcf;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.44px;
`;
