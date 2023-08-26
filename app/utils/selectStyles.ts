import { CSSObjectWithLabel } from "react-select";
import { theme } from "../theme";

const selectStyles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: "transparent",
    height: "100%",
    borderColor: theme.secondaryColor100,
    boxShadow: `0`,
    outline: "none",
    ":hover": { borderColor: theme.secondaryColor200 },
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: theme.secondaryColor100,
  }),
  container: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: theme.backgroundColor300,
    minWidth: 250,
  }),
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: theme.secondaryColor500,
  }),
  option: (baseStyles: CSSObjectWithLabel, props: any) => ({
    ...baseStyles,
    backgroundColor: props.isFocused
      ? theme.primaryColor100
      : theme.secondaryColor500,

    color: props.isFocused ? theme.secondaryColor500 : theme.backgroundColor100,
    ":active": {
      backgroundColor: theme.primaryColor200,
    },
  }),
};

export default selectStyles;
