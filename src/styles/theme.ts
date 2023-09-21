import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    red: {
      light: "#feeaee",
      lightHover: "#fee0e5",
      lightActive: "#fcbec9",
      normal: "#f62e52",
      normalHover: "#dd294a",
      normalActive: "#c52542",
      dark: "#b9233e",
      darkHover: "#941c31",
      darkActive: "#6f1525",
      darker: "#56101d",
    },
    gray: [
      "#f9fbfd",
      "#f6f8fb",
      "#ecf1f7",
      "#c1d2e6",
      "#aebdcf",
      "#9aa8b8", // 500
      "#919ead",
      "#747e8a",
      "#575e67",
      "#444a51",
    ],
    blue: [
      "#e9f4ff",
      "#deefff",
      "#bbdefe",
      "#2593fc",
      "#2184e3",
      "#1e76ca",
      "#1c6ebd",
      "#165897",
      "#165897",
      "#114271",
      "#0d3358",
    ],
    button: {
      bgColor: "#2593fc",
    },
  },
  text: {
    text1: {
      medium: `font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;`,
      bold: `font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;`,
    },
    text2: {
      medium: `font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;`,
      bold: `font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;`,
    },
    title2: {
      bold: `font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.44px;`,
    },
    title4: {
      medium: `font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;`,
      bold: `font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;`,
    },
    subHead2: {
      semibold: `font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;`,
    },
    caption1: {
      regular: `font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;`,
      medium: `font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;`,
    },
  },
  textColor: {
    gray: {
      0: `color: #fff`,
      300: `color: #C1D2E6`,
      400: `color: #AEBDCF`,
      500: `color: #9AA8B8`,
      600: `color: #919EAD`,
      700: `color: #747E8A`,
      800: `color: #575E67`,
      900: `color: #444A51`,
      950: `color: #1A1A1A`,
    },
    blue: {
      300: `color: #2593FC`,
    },
  },
};
