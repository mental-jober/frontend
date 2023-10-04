import { FC } from "react";
import {
  PiTextT,
  PiListPlus,
  PiNotebook,
  PiFile,
  PiPaperclipHorizontal,
} from "react-icons/pi";

export type PlateTitle = "컨텐츠" | "구분선" | "템플릿" | "페이지" | "링크";

export type PlateName = "cont" | "line" | "temp" | "page" | "link";

export interface PlateConfigProp {
  name: PlateName;
  title: PlateTitle;
  icon: FC;
  bdColor: string;
  bgColor: string;
}

export type PlateConfig = {
  [key: string]: PlateConfigProp;
};

// 추후 컬러는 정리 되면 해당 변수로 변경!!!!!!!
export const PLATE_CONFIG: PlateConfig = {
  cont: {
    name: "cont",
    title: "컨텐츠",
    icon: PiTextT,
    bdColor: "#53c31b",
    bgColor: "#f5ffeb",
  },
  line: {
    name: "line",
    title: "구분선",
    icon: PiListPlus,
    bdColor: "#fab327",
    bgColor: "#fffbe6",
  },
  temp: {
    name: "temp",
    title: "템플릿",
    icon: PiNotebook,
    bdColor: "#ec419e",
    bgColor: "#ffeff6",
  },
  page: {
    name: "page",
    title: "페이지",
    icon: PiFile,
    bdColor: "#3dcbca",
    bgColor: "#E6FFFB",
  },
  link: {
    name: "link",
    title: "링크",
    icon: PiPaperclipHorizontal,
    bdColor: "#3c5feb",
    bgColor: "#f0f5ff",
  },
};

//온보딩 프로필형, 프로젝트형에 따른 카드 정리
type CardType = {
  title: string;
  description: string;
  fileName: string;
};

type CardData = {
  프로필형: CardType[];
  프로젝트형: CardType[];
};

export const CARD_DATA: CardData = {
  프로필형: [
    {
      title: "이력서",
      description:
        "이름, 설명, 링크, 자기소개, 학업, 수상내역, 업적, 경력, 장단점 소개, 포트폴리오 첨부",
      fileName: "profile_example_resume.png",
    },
    {
      title: "회사소개",
      description: "회사명, 회사소개, 연혁, 경력 등",
      fileName: "profile_example_company.png",
    },
    {
      title: "제품 소개",
      description:
        "제품 설명, 구매 신청서가 포함되어 있는 공동구매 신청 페이지 레이아웃 입니다.",
      fileName: "profile_example_product.png",
    },
  ],
  프로젝트형: [
    {
      title: "사이드 프로젝트",
      description:
        "프로젝트 설명, 참여 신청서가 포함되어 있는 사이드 프로젝트 페이지를 만들어보세요!",
      fileName: "project_example_sideproject.png",
    },
    {
      title: "이벤트 소개",
      description:
        "자버의 레이아웃을 활용해서 나만의 이벤트 페이지를 만들어보세요!",
      fileName: "project_example_event.png",
    },
    {
      title: "세미나 주최",
      description:
        "자버의 레이아웃을 활용해서 나만의 세미나 신청 페이지를 만들어보세요!",
      fileName: "project_example_seminar.png",
    },
  ],
};

export const settings = [
  { value: "EDITOR", label: "편집자" },
  { value: "VIEWER", label: "뷰어" },
];

export const changes = [
  { value: "EDITOR", label: "편집자" },
  { value: "VIEWER", label: "뷰어" },
  { value: "DELETE", label: "삭제" },
];
