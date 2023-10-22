import styled from "styled-components";
import Image from "next/image";
import IntroEditButton from "./IntroEditButton";
import useSpaceStore from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { useParams, usePathname } from "next/navigation";

const IntroProfileImg = () => {
  const { getValue } = useSpaceStore();
  const pathName = usePathname();
  const { id } = useParams();
  const { spaceWallId } = useSpaceWallStore();
  const profileImg = getValue(
    spaceWallId as number,
    "profileImageUrl",
  ) as string;

  const dummy = "/default_profile.png";

  return (
    <>
      <PfImg
        src={profileImg || dummy}
        width={116}
        height={116}
        alt="프로필 이미지"
      />
      {pathName === `/space/${id}/edit` ? <IntroEditButton /> : null}
    </>
  );
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
