import { useUserStore } from "@/lib/store/useUserStore";
import Image from "next/image";
import React from "react";

const DocumentSpace = () => {
  const { user } = useUserStore();
  return (
    <>
      <div className="w-[210px] flex flex-col bg-white py-[14px] px-[10px]">
        <div className="flex flex-col gap-1 h-[100px] rounded-xl bg-foundation-grey-200 ">
          <div className="flex justify-between bg-foundation-grey-300 rounded-xl">
            <p className="text1-bold text-white py-2 px-[14px]">
              {user.username}
            </p>
            <div className="flex items-center pr-[10px]">
              <Image
                src="/home/ChevronDown.svg"
                alt="위로꺽쇠"
                width={18}
                height={18}
                className="text-white "
              />
            </div>
          </div>
          <div className="text2-medium text-foundation-grey-700 px-[14px] py-1">
            패스트캠퍼스 자버
          </div>
          <div className="relative w-5 h-5 flex justify-center items-center mx-auto">
            <div className="w-5 h-5 rounded-full bg-white "></div>
            <Image
              src="/home/Plus.svg"
              alt="플러스아이콘"
              width={18}
              height={18}
              className="text-foundation-blue-200 z-10 absolute"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-[10px]">
          <div className="w-full text-foundation-grey-700 bg-foundation-grey-200 h-[41px] text2-medium rounded-lg flex justify-center items-center">
            문서 보내기
          </div>
          <div className="w-full text-foundation-grey-700 bg-foundation-grey-200 h-[41px] text2-medium rounded-lg flex justify-center items-center">
            연락처 추가
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-[10px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/home/ChevronUp.svg"
                alt="위꺽쇠아이콘"
                width={10}
                height={10}
              />
              <p className="text2-bold">연락처 그룹</p>
            </div>
            <ul className="flex flex-col gap-4 text2-medium text-foundation-grey-700 pl-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/home/ChevronLeftSmall.svg"
                  alt="왼쪽꺽쇠아이콘"
                  width={9}
                  height={9}
                />
                전체보기
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/home/ChevronLeftSmall.svg"
                  alt="왼쪽꺽쇠아이콘"
                  width={9}
                  height={9}
                />
                임직원
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/home/ChevronLeftSmall.svg"
                  alt="왼쪽꺽쇠아이콘"
                  width={9}
                  height={9}
                />
                관계자
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/home/ChevronLeftSmall.svg"
                  alt="왼쪽꺽쇠아이콘"
                  width={9}
                  height={9}
                />
                주주
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/home/ChevronLeftSmall.svg"
                  alt="왼쪽꺽쇠아이콘"
                  width={9}
                  height={9}
                />
                고객
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/home/ChevronLeftBig.svg"
              alt="왼쪽꺽쇠아이콘"
              width={10}
              height={10}
            />
            <p className="text2-bold">문서보관함</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentSpace;
