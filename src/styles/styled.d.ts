import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}
