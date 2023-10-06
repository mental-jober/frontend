"use client";

import { MyTextInput, SpaceNameInput } from "@/components/textArea/TextArea";
import Button from "@/components/common/Button";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import { handleUpload } from "@/lib/api/cloudinary";

import { useParams, useRouter } from "next/navigation";
import useSpaceStore from "@/lib/store/useSpaceStore";

const ProfileEditPage = () => {
  const { getValue, setValue } = useSpaceStore();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { id } = useParams();

  const NumId = Number(id);

  const profileImage = getValue(NumId, "profileImageUrl");

  const onImageClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
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
          setValue(NumId, "profileImageUrl", imageUrl);
        }
      } catch (error) {
        console.error("업로드 실패:", error);
        imageUrl = null;
      }
    }
    return imageUrl;
  };

  const onSave = () => {
    router.push(`/space/${id}/edit`);
  };

  return (
    <>
      <div>
        <div className="mt-[82px]">
          <p className="profile-edit font-bold">프로필 편집</p>
        </div>
        <div className="flex items-center flex-col mt-6">
          <Image
            src={profileImage || "/default_profile.png"}
            width={134}
            height={134}
            alt="프로필 이미지"
            className="rounded-full border border-solid"
          />

          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
            id="imageInput"
            ref={inputFileRef}
          />

          <button onClick={onImageClick} className="cursor-pointer h-0 w-0 p-0">
            <Image
              src="/edit_icon.png"
              width={36}
              height={36}
              alt="편집"
              className="rounded-full border border-white relative top-[-36px] left-12 cursor-pointer"
            />
          </button>
        </div>

        <div>
          <p className="profile-edit font-semibold mt-8">스페이스 이름</p>
          <SpaceNameInput />
          <p className="profile-edit font-semibold mt-8">소개글</p>
          <MyTextInput />

          <div className="flexable mt-6">
            <Button $confirm onClick={onSave}>
              저장
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditPage;
