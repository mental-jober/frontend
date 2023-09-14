import styled from "styled-components";

interface IntroBackGroundProps {
  imgURL?: string;
}

export default function IntroBackGround({ imgURL }: IntroBackGroundProps) {
  return <BgBox $url={imgURL}></BgBox>;
}
const BgBox = styled.div<{ $url?: string }>`
  width: 360px;
  height: 130px;
  background: url(${({ $url }) => $url}), lightgray 50% / cover no-repeat,
    #b3b3b3;
`;
