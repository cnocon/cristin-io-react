const COLOR_PRIMARY = "hsl(216, 80%, 39%)";
const COLOR_PRIMARY_BG = "hsl(216, 100%, 85%)";
const COLOR_SECONDARY = "hsl(45, 85%, 50%)";
const COLOR_SECONDARY_BG = "hsl(45, 100%, 91%)";
const COLOR_WHITE = "#fff";
const COLOR_BLACK = "#222";
const LINEAR_RAINBOW_GRADIENT = "linear-gradient(-240deg,#bca2f6,#cdb9f8 5%,#b3e9ff 17%,#b3e9ff 25%,#bffcf7 35%,#ffe366 60%,#fad1d1 85%)";

const themeStyles = {
  colors: {
    primary: COLOR_PRIMARY,
    primaryBg: COLOR_PRIMARY_BG,
    secondary: COLOR_SECONDARY,
    secondaryBg: COLOR_SECONDARY_BG,
    white: COLOR_WHITE,
    black: COLOR_BLACK,
  },
  gradients: {
    primary: LINEAR_RAINBOW_GRADIENT
  }
};
export default themeStyles;