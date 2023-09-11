import { FC } from "react";
import {
  PiTextT,
  PiListPlus,
  PiNotebook,
  PiFile,
  PiPaperclipHorizontal,
} from "react-icons/pi";

export type PlateTitle = "텍스트" | "구분선" | "템플릿" | "페이지" | "링크";

export type PlateName = "text" | "line" | "temp" | "page" | "link";

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
  text: {
    name: "text",
    title: "텍스트",
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
