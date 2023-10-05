import styled, { css } from "styled-components";
import IntroCameraButton from "./IntroCameraButton";

interface IntroBackGroundProps {
  imgURL?: string;
}

const IntroBackGround = ({
  imgURL = "/default_background.png",
}: IntroBackGroundProps) => {
  return (
    <>
      <Img $url={imgURL} />
      <IntroCameraButton />
    </>
  );
};

const Img = styled.div<{ $url: string }>`
  ${({ $url }) =>
    $url &&
    css`
      background-image: url(${$url});
    `}
  height: 138px;
  min-width: 100%;
  max-width: 100%;

  img {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default IntroBackGround;
