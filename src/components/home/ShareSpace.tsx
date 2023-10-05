import { getShareSpaceListApi, getTempSpaceByIdApi } from "@/lib/api/api";
import { useUserStore } from "@/lib/store/useUserStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SpaceData {
  spaceWallId: number;
  title: string | null;
  auths: string;
}

const SharedSpace = () => {
  const router = useRouter();
  const [shareSpaceList, setShareSpaceList] = useState<SpaceData[]>([]);
  const [tempSpaceFlags, setTempSpaceFlags] = useState<{
    [key: number]: boolean;
  }>({});
  const { user } = useUserStore();

  useEffect(() => {
    const fetchShareSpaceList = async () => {
      try {
        const data = await getShareSpaceListApi();
        if (Array.isArray(data.data)) {
          setShareSpaceList(data.data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (e) {
        console.error(e);
        setShareSpaceList([]);
      }
    };
    fetchShareSpaceList();
  }, []); // shareSpaceList를 가져오는 것만 담당

  useEffect(() => {
    const checkAllTempSpaces = async () => {
      const newTempSpaceFlags: { [key: number]: boolean } = {};
      for (const data of shareSpaceList) {
        newTempSpaceFlags[data.spaceWallId] = await checkTempSpace(
          data.spaceWallId,
        );
      }
      setTempSpaceFlags(newTempSpaceFlags);
    };
    checkAllTempSpaces();
  }, [shareSpaceList]); // shareSpaceList가 변경될 때 tempSpaceFlags를 업데이트

  const checkTempSpace = async (spaceWallId: number) => {
    try {
      const tempSpace = await getTempSpaceByIdApi(spaceWallId);
      if (tempSpace?.code === 200) {
        return true;
      }
    } catch (e) {
      console.error("Failed to check temp space:", e);
    }
    return false;
  };

  const getAuthString = (auth: string) => {
    switch (auth) {
      case "OWNER":
        return "소유자";
      case "EDITOR":
        return "편집자";
      case "VIEWER":
        return "뷰어";
      default:
        return "알 수 없음";
    }
  };

  const handleLoadTempSpace = (id: number) => {
    router.push(`/space/${id}/edit`);
  };

  return (
    <div className="w-[210px] flex flex-col bg-white py-[14px] px-[10px]">
      <div className="flex flex-col gap-1 h-[100px] rounded-xl bg-foundation-grey-200 mb-4">
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
          신규 공유스페이스 생성
        </div>
        <div className="relative w-5 h-5 flex justify-center items-center mx-auto">
          <div className="w-5 h-5 rounded-full bg-white "></div>
          <Image
            src="/home/Plus.svg"
            alt="플러스아이콘"
            width={18}
            height={18}
            className="text-foundation-blue-200 z-10 absolute"
            onClick={() => router.push("/onboarding")}
          />
        </div>
      </div>
      <div className="text2-bold text-foundation-grey-700 mx-2 mb-2">
        기존 공유스페이스
      </div>
      <div style={{ overflowY: "auto", height: "calc(100vh - 180px)" }}>
        {shareSpaceList.map((data) => (
          <div
            key={data.spaceWallId}
            className="flex flex-col justify-between gap-1 rounded-xl bg-foundation-grey-200 py-2 px-[14px] my-2"
          >
            <div className="flex justify-between gap-1 items-center">
              <span className="text1-bold text-foundation-grey-700">
                {data.title ?? "[제목없음]"}
              </span>
              {tempSpaceFlags[data.spaceWallId] && (
                <button
                  onClick={() => handleLoadTempSpace(data.spaceWallId)}
                  className="text3-medium rounded-lg text-foundation-grey-700 bg-foundation-blue-200"
                >
                  불러오기
                </button>
              )}
            </div>
            <div className="flex justify-between gap-1 items-center">
              <span className="text2-medium text-foundation-grey-700">
                ID : {data.spaceWallId}
              </span>
              <span className="caption1-medium text-foundation-grey-700">
                권한 : {getAuthString(data.auths)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedSpace;
