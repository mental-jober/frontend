"use client";

import { MyTextArea, SpaceNametextarea } from "@/components/TextArea";
import Button from "@/components/common/Button";

import Image from "next/image";

import { ChangeEvent, useRef, useState } from "react";

const ProfileEditPage = () => {
  const [profileImage, setProfileImage] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const onImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target?.result as string;
        setProfileImage(base64Data);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="min-w-[360px] max-w-[420px] px-5 h-screen mx-auto border border-solid">
        <div className="mt-[82px]">
          <p className="profile-edit font-bold">프로필 편집</p>
        </div>
        <div className="flex items-center flex-col mt-6">
          <Image
            src={profileImage || "/Default_pfp.png"}
            width={134}
            height={134}
            alt="프로필 이미지"
            className="rounded-full"
          />

          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
            id="imageInput"
            ref={inputFileRef}
          />

          <div onClick={handleImageClick} className="cursor-pointer h-0">
            <Image
              src="/edit_icon.png"
              width={36}
              height={36}
              alt="편집"
              className="rounded-full border border-white relative top-[-36px] left-12 cursor-pointer"
            />
          </div>
        </div>

        <form>
          <p className="profile-edit font-semibold mt-8">스페이스 이름</p>
          <SpaceNametextarea />
          <p className="profile-edit font-semibold mt-8">소개글</p>
          <MyTextArea />

          <div className="flexable mt-6">
            <Button $save="true" type="submit">
              저장
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileEditPage;
