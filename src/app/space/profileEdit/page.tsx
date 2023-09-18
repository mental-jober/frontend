"use client";

import { MyTextArea, SpaceNametextarea } from "@/components/TextArea";
import useStore from "@/lib/store/store.module";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const ProfileEditPage = () => {
  const [textValue, setTextValue] = useState("");
  const { profileImage, titleText, currentText, setProfileImage } = useStore();
  const router = useRouter();

  useEffect(() => {
    setTextValue(currentText);
  }, [currentText]);

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

  const onSave = () => {};
  return (
    <>
      <div className="min-w-[360px] max-w-[420px] px-5 h-screen mx-auto border border-solid">
        <div className="flex justify-center items-center mt-[87px] mb-9 w-[103px] h-[35px]  ml-[6px] font-bold text-[19px]">
          프로필 편집
        </div>
        <div className="flex items-center flex-col">
          <Image
            src={profileImage || "/Default_pfp.png"}
            width={127}
            height={127}
            alt="프로필 이미지"
            className="rounded-full"
          />

          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
            id="imageInput"
          />

          <label htmlFor="imageInput" className="cursor-pointer">
            <Image
              src="/edit_icon.png"
              width={36}
              height={36}
              alt="편집"
              className="rounded-full border border-white relative top-[-36px] left-12 cursor-pointer"
            />
          </label>
        </div>

        <form>
          <div className="flex flex-col justify-center items-center ml-0.5 w-[107px] h-[30px] font-semibold text-[16px]">
            스페이스 이름
          </div>
          <SpaceNametextarea />
          <div className="flex flex-col justify-center items-center ml-0.5 w-[52px] h-[30px] mt-[23px] font-semibold text-[16px]">
            소개글
          </div>
          <MyTextArea />

          <button
            type="submit"
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
          >
            저장
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileEditPage;
