import styled, { css } from "styled-components";
import IntroCameraButton from "./IntroCameraButton";
import { ChangeEvent, useRef } from "react";
import { useParams } from "next/navigation";
import useSpaceStore from "@/lib/store/useSpaceStore";
import { handleUpload } from "@/lib/api/cloudinary";

const IntroBackGround = () => {
  const { getValue, setValue } = useSpaceStore();
  const backInputFileRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const NumId = Number(id);

  const imgURL = "/default_background.png";

  const backgroundImage = getValue(NumId, "backgroundImageUrl");

  const onImageClick = () => {
    if (backInputFileRef.current) {
      backInputFileRef.current.click();
    }
  };

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    let imageUrl = null;

    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      try {
        const response = await handleUpload(file);

        if (response?.status === 200) {
          const data = response.data;
          imageUrl = data.url;
          setValue(NumId, "backgroundImageUrl", imageUrl);
        }
      } catch (error) {
        console.error("업로드 실패:", error);
        imageUrl = null;
      }
    }
    return imageUrl;
  };

  return (
    <>
      <Img $url={backgroundImage || imgURL} />

      <StyledUpload
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        id="imageInput"
        ref={backInputFileRef}
      />

      <UploadBtn onClick={onImageClick}>
        <IntroCameraButton />
      </UploadBtn>
    </>
  );
};

const Img = styled.div<{ $url: string }>`
  ${({ $url }) =>
    $url &&
    css`
      background-image: url(${$url});
    `}
  height: 138px;
  min-width: 100%;
  max-width: 100%;

  img {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const StyledUpload = styled.input`
  display: none;
`;

const UploadBtn = styled.button`
  cursor: pointer;
  height: 0px;
  width: 0px;
  padding: 0;
`;

export default IntroBackGround;
