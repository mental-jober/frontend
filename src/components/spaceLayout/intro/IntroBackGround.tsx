import Image from "next/image";

interface IntroBackGroundProps {
  imgURL?: string;
}

export default function IntroBackGround({
  imgURL = "/default_background.png",
}: IntroBackGroundProps) {
  return <Image src={imgURL} width={360} height={138} alt="배경 이미지" />;
}
