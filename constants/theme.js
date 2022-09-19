import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#1E1E1E",
  secondary: "#3B3B3B",

  white: "#fff",
  lightGreen: "#4BEE70",
  red: "#D84035",
  black: "#000000",
  gray: "#212125",
  gray1: "#1f1f1f",
  lightGray: "#3B3B3B",
  lightGray2: "#212125",
  lightGray3: "#757575",
  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.8)",
  transparentBlack1: "rgba(0, 0, 0, 0.4)",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: { fontWeight: "900", fontSize: SIZES.largeTitle },
  h1: { fontWeight: "900", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontWeight: "700", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontWeight: "700", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontWeight: "700", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontWeight: "700", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontWeight: "500",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontWeight: "500",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontWeight: "500",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontWeight: "500",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontWeight: "500",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
