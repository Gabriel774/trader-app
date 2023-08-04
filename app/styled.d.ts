import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor000: string;
    primaryColor100: string;
    primaryColor200: string;
    primaryColor300: string;
    primaryColor400: string;
    primaryColor500: string;
    primaryColor600: string;
    primaryColor700: string;

    secondaryColor000: string;
    secondaryColor100: string;
    secondaryColor200: string;
    secondaryColor300: string;
    secondaryColor400: string;
    secondaryColor500: string;
    secondaryColor600: string;

    backgroundColor000: string;
    backgroundColor100: string;
    backgroundColor200: string;
    backgroundColor300: string;
    backgroundColor400: string;
    backgroundColor500: string;

    error: string;
    errorLight: string;
    info: string;
    infoLight: string;
    success: string;
  }
}
