import styled from "styled-components";

interface IntroProfileImgProps {
  imgURL?: string;
}

export default function IntroProfileImg({ imgURL }: IntroProfileImgProps) {
  return <PfImg $url={imgURL}></PfImg>;
}
const PfImg = styled.div<{ $url?: string }>`
  width: 116px;
  height: 116px;
  border-radius: 116px;
  border: 2px solid #fff;
  background: url(${({ $url }) => $url}), lightgray 50% / cover no-repeat;
`;
