import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      red: {
        light: string;
        lightHover: string;
        lightActive: string;
        normal: string;
        normalHover: string;
        normalActive: string;
        dark: string;
        darkHover: string;
        darkActive: string;
        darker: string;
      };
      gray: string[];
      blue: string[];
      button: {
        bgColor: string;
      };
    };
    text: {
      [key: string]: { [key: string]: string };
    };
    textColor: {
      [key: string]: { [key: number]: string };
    };
  }
}
