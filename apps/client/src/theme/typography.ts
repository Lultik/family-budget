import type { TypographyOptions } from "@mui/material/styles/createTypography";

export function remToPx(value: string) {
  return Math.round(Number.parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export const typography: TypographyOptions = {
  fontFamily: `'Roboto', 'Arial', sans-serif`,
  h1: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(25.5),
    fontWeight: 500,
    letterSpacing: 0,
  },
  h2: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: pxToRem(22.5),
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  button: {
    textTransform: "none",
  },
};
