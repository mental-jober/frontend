"use client";
import ToggleSwitch from "@/components/common/ToggleSwitch";
import { useState } from "react";

const Example = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const onToggle = (isChecked: boolean) => {
    console.log(`Switched to ${isChecked}`);
    setIsSwitched(isChecked);
  };
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>토글 스위치</div>
        <ToggleSwitch checked={isSwitched} onChange={onToggle} />

        {/* 스타일 부분 */}
        <div>스타일</div>
        <div className="title1-bold">
          title1-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title1-medium">
          title1-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title1-regular">
          title1-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title2-bold">
          title2-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title2-medium">
          title2-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title2-regular">
          title2-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title3-bold">
          title3-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title3-medium">
          title3-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title3-regular">
          title3-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title4-bold">
          title4-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title4-medium">
          title4-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="title4-regular">
          title4-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text1-bold">
          text1-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text1-medium">
          text1-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text1-regular">
          text1-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text2-bold">
          text2-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text2-medium">
          text2-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="text2-regular">
          text2-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="caption1-bold">
          caption1-bold 동해물과 백두산이 마르고 닳도록 Until the rivers and the
          Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="caption1-medium">
          caption1-medium 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="caption1-regular">
          caption1-regular 동해물과 백두산이 마르고 닳도록 Until the rivers and
          the Baekdu Mountain run dry and wear away 1234567890
        </div>
        <div className="mt-10">컬러</div>
        <div className="text-foundation-red-light">
          text-foundation-red-light 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-lightHover">
          text-foundation-red-lightHover 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-LightActive">
          text-foundation-red-LightActive 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-normal">
          text-foundation-red-normal 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-normalHover">
          text-foundation-red-normalHover 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-normalActive">
          text-foundation-red-normalActive 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-dark">
          text-foundation-red-dark 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-darkHover">
          text-foundation-red-darkHover 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-darkActive">
          text-foundation-red-darkActive 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-red-Darker">
          text-foundation-red-Darker 동해물과 백두산이 마르고 닳도록
        </div>

        <div className="text-foundation-grey-50">
          text-foundation-grey-50 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-100">
          text-foundation-grey-100 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-200">
          text-foundation-grey-200 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-250">
          text-foundation-grey-250 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-300">
          text-foundation-grey-300 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-400">
          text-foundation-grey-400 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-500">
          text-foundation-grey-500 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-600">
          text-foundation-grey-600 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-700">
          text-foundation-grey-700 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-800">
          text-foundation-grey-800 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-900">
          text-foundation-grey-900 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-grey-950">
          text-foundation-grey-950 동해물과 백두산이 마르고 닳도록
        </div>

        <div className="text-foundation-blue-50">
          text-foundation-blue-50 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-100">
          text-foundation-blue-100 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-200">
          text-foundation-blue-200 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-300">
          text-foundation-blue-300 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-400">
          text-foundation-blue-400 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-500">
          text-foundation-blue-500 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-600">
          text-foundation-blue-600 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-700">
          text-foundation-blue-700 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-800">
          text-foundation-blue-800 동해물과 백두산이 마르고 닳도록
        </div>
        <div className="text-foundation-blue-900">
          text-foundation-blue-900 동해물과 백두산이 마르고 닳도록
        </div>
      </div>
    </div>
  );
};
export default Example;
