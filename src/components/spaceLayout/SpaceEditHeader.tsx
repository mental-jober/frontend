"use client";

import { PiList, PiClockClockwise } from "react-icons/pi";
import styled from "styled-components";
import Button from "../common/Button";
import { useState } from 'react';
import DndPage from '../pageLayout/DndPage';
import { GrFormPrevious } from "react-icons/gr";
// import { useRouter } from "next/navigation";
// import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
// import useSpaceStore, { SpaceData } from "@/lib/store/useSpaceStore";
// import { SaveSpaceData, saveSpace } from "@/lib/api/spaceEditAPI";

const SpaceEditHeader = () => {
  // const router = useRouter();
  // const { spaceWallId, spaceWallTempId } = useSpaceWallStore();
  // const { getData } = useSpaceStore();
  // const space = getData(spaceWallId as number) as SpaceData;
  // const spaceData = {
  //   title: space?.title,
  //   description: space?.description,
  //   profileImageUrl: space?.profileImageUrl,
  //   backgroundImageUrl: space?.backgroundImageUrl,
  //   spaceWallId,
  //   spaceWallTempId,
  //   componentTempList: space?.componentList,
  // };

  const onClickComplete = () => {
    // router.push(`/`);
    // saveSpace(spaceWallId as number, spaceData as SaveSpaceData);
  };

  const [showDndPage, setShowDndPage] = useState(false); // 상태 추가

  const toggleDndPage = () => {
    setShowDndPage((prev) => !prev); // 상태를 반전
  };

  return (
    <>
    <SpaceEditHeaderIcons>
      <StyledListIcon onClick={toggleDndPage} />
      <RightIcons>
        <HistoryButton></HistoryButton>
        <PreviewButton>미리보기</PreviewButton>
        <CompleteButton onClick={onClickComplete}>완료</CompleteButton>
      </RightIcons>
    </SpaceEditHeaderIcons>

     {/* 조건부 렌더링 */}
     {showDndPage && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, backgroundColor: 'white' }}>
          <div className='mt-10'>
          <DndPage />
          </div>
          {/* 뒤로가기 버튼 */}
          <button style={{ position: 'absolute', top: 0, left: 0, zIndex: 1001 }} onClick={toggleDndPage}>
            <GrFormPrevious />
          </button>
        </div>
      )}
    </>
  );
};
const SpaceEditHeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledListIcon = styled(PiList)`
  width: 22px;
  height: 22px;
  align-self: center;
`;

const RightIcons = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;
const HistoryButton = styled(PiClockClockwise)`
  width: 26px;
  height: 25px;
  color: #343940;
`;

const PreviewButton = styled(Button)`
  padding: 0;
  width: 83px;
  height: 34px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #2593fc;
  text-align: center;
  background: #fff;
  line-height: normal;
  align-items: center;
  flex-direction: column;
  border-radius: 4.606px;
  justify-content: center;
  letter-spacing: -0.28px;
  border: 0.921px solid #1990ff;
`;

const CompleteButton = styled(Button)`
  padding: 0;
  width: 64px;
  height: 34px;
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  line-height: normal;
  flex-direction: column;
  border-radius: 4.606px;
  justify-content: center;
  letter-spacing: -0.28px;
  background-color: #2593fc;
`;
export default SpaceEditHeader;
