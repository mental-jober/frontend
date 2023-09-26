import styled from "styled-components";
import Image from "next/image";

interface IntroProfileImgProps {
  imgURL?: string;
}

const IntroProfileImg = ({
  imgURL = "/default_profile.png",
}: IntroProfileImgProps) => {
  {
    return <PfImg src={imgURL} width={116} height={116} alt="프로필 이미지" />;
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
