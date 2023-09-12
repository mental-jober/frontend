import { MyTextArea, SpaceNametextarea } from "@/components/TextArea";
import Image from "next/image";

const profileEditPage = () => {
  return (
    <>
      <div className="min-w-[360px] max-w-[430px] px-5 h-screen mx-auto border border-solid">
        <div className="flex justify-center items-center mt-[87px] mb-9 w-[103px] h-[35px]  ml-[6px] font-bold text-[19px]">
          프로필 편집
        </div>
        <div className="flex items-center flex-col">
          <Image
            src="/Default_pfp.png"
            width={127}
            height={127}
            alt="프로필 이미지"
          />
          <button className="relative top-[-36px] left-12 z-20">
            <Image
              src="/edit_icon.png"
              width={36}
              height={36}
              alt="편집"
              className="rounded-full border border-white"
            />
          </button>
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
        </form>
      </div>
    </>
  );
};

export default profileEditPage;
