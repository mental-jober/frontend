import styled from "styled-components";
import Image from "next/image";
import IntroEditButton from "./IntroEditButton";
import useSpaceStore from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";

const IntroProfileImg = () => {
  {
    const { getValue } = useSpaceStore();
    const { spaceWallId } = useSpaceWallStore();
    const defaultImg = "/default_profile.png";

    const profileImg = getValue(spaceWallId as number, "profileImageUrl");

    return (
      <>
        <PfImg
          src={profileImg || defaultImg}
          width={116}
          height={116}
          alt="프로필 이미지"
        />
        <IntroEditButton />
      </>
    );
  }
};

const PfImg = styled(Image)`
  left: 0;
  right: 0;
  top: 65px;
  margin: auto;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export default IntroProfileImg;
