import { useRouter } from "next/navigation";
import { useState } from "react";
import DocumentSpace from "./DocumentSpace";
import SharedSpace from "./ShareSpace";
import LeftSideBar from './LeftSideBar';

const HomeLayout = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState<"document" | "shared">("document");
  const [iconSrc, setIconSrc] = useState({
    document: "home_2_reversed.svg",
    shared: "home_3.svg",
  });

  const handleClick = (type: "document" | "shared") => {
    setIsSelected(type);

    setIconSrc((prevIconSrc) => {
      let newIconSrc = { ...prevIconSrc };
      if (type === "document") {
        newIconSrc.document = "home_2_reversed.svg";
      } else {
        newIconSrc.document = "home_2.svg";
      }

      if (type === "shared") {
        newIconSrc.shared = "home_3_reversed.svg";
      } else {
        newIconSrc.shared = "home_3.svg";
      }
      return newIconSrc;
    });
  };

  return (
    <div className="h-screen flex -mt-[58px]">
      <LeftSideBar iconSrc={iconSrc} handleClick={handleClick} />
      <div>
        {isSelected === "document" && <DocumentSpace />}
        {isSelected === "shared" && <SharedSpace />}
      </div>

      {/* 우측 배경색 부분 */}
      <div className="flex-1 bg-zinc-500"></div>
    </div>
  );
};

export default HomeLayout;
