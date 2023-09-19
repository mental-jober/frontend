"use client";

import { CARD_DATA } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

type TabType = "프로필형" | "프로젝트형";
type CardProps = {
  title: string;
  description: string;
};

const Onboarding = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("프로필형");

  const imageSrc =
    selectedTab === "프로필형" ? "/mini_profile.svg" : "/mini_project.svg";
  const titleText = selectedTab === "프로필형" ? "프로필형" : "프로젝트형";
  const descriptionText =
    selectedTab === "프로필형"
      ? "개인의 이력 관리 또는 셀프 PR이 필요한 프리랜서에게 적합한 레이아웃입니다."
      : "프로젝트 또는 회사의 채용, 세미나 등의 신청 양식을 받을 수 있는 레이아웃입니다.";

  return (
    <div className="min-w-[360px] max-w-[430px] mx-auto flex flex-col bg-foundation-grey-50 w-full h-auto p-[20px] text-left text-lg text-foundation-grey-950">
      <b className="mb-[10px] title2-bold">
        <p>공유 스페이스의</p>
        <p>레이아웃을 선택해주세요</p>
      </b>
      <div className="mb-[18px] text2-medium text-foundation-grey-700">
        <p>선택한 이후에도 편집 기능을 통해</p>
        <p>레이아웃을 커스텀하거나 변경하실 수 있습니다.</p>
      </div>

      <div className="flex">
        <div
          className={`w-full h-[49px] flex items-center justify-center text-center  ${
            selectedTab === "프로필형"
              ? "title4-bold text-foundation-blue-300 border-b-4 border-solid border-foundation-blue-300"
              : "title4-medium text-foundation-grey-700 border-b-4 border-solid border-foundation-grey-300"
          }`}
          onClick={() => setSelectedTab("프로필형")}
        >
          프로필형
        </div>
        <div
          className={`w-full h-[49px] flex items-center justify-center text-center ${
            selectedTab === "프로젝트형"
              ? "title4-bold text-foundation-blue-300 border-b-4 border-solid border-foundation-blue-300"
              : "title4-medium text-foundation-grey-700 border-b-4 border-solid border-foundation-grey-300"
          }`}
          onClick={() => setSelectedTab("프로젝트형")}
        >
          프로젝트형
        </div>
      </div>
      {/* 이미지와 설명 부분입니다. */}
      <div className="flex justify-evenly items-end gap-8 mb-[18px] mx-[-20px] px-[20px] bg-foundation-grey-200 h-[138px]">
        <Image src={imageSrc} alt="예시 이미지" width={128} height={126} />
        <div>
          <p className="text2-bold mb-[3px] text-foundation-grey-700">
            {titleText}
          </p>
          <p className="caption1-regular text-foundation-grey-500 w-[150px] pb-[24px]">
            {descriptionText}
          </p>
        </div>
      </div>

      {/* 수정된 카드 부분 */}
      <div className="flex flex-col w-full gap-4 mb-[10px]">
        {CARD_DATA[selectedTab].map((card) => (
          <Card
            title={card.title}
            description={card.description}
            key={card.title}
          />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-2xl bg-white shadow w-full max-w-[400px] h-[110px] p-5 flex justify-between items-start">
      <div className="flex flex-col w-3/5 gap-1">
        <b className="title4-bold">{title}</b>
        <div className="caption1-medium text-foundation-grey-700">
          {description}
        </div>
      </div>
      <button className="rounded-[40px] bg-foundation-blue-300 w-[72px] h-[32px] text-sm text-white self-center">
        미리보기
      </button>
    </div>
  );
};

export default Onboarding;
