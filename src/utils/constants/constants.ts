import React from "react";
import PortfolioProject from "../../components/PortfolioProject";

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

export const CRISTIN_IO_GATSBY = "cristin-io-gatsby";
export const CRISTIN_IO_NUXT = "cristin-io-nuxt";
export const POKEMON_INFO_SITE = "pokemon-info-site";
export const CRISTINOCONNOR_DOT_COM = "cristinoconnor-dot-com";
export const YOUTUBE_SEARCH = "youtube-search";
export const GITHUB_STATS_CARD = "github-stats-card";

export const PROJECT_IDS = [
  GITHUB_STATS_CARD,
  CRISTIN_IO_GATSBY,
  CRISTIN_IO_NUXT,
  YOUTUBE_SEARCH,
  CRISTINOCONNOR_DOT_COM,
  POKEMON_INFO_SITE
];

export const PROJECT_COMPONENTS: {
  [key: string]: React.FC<{ id: string }>
} = {
  [CRISTIN_IO_GATSBY]: PortfolioProject,
  [CRISTINOCONNOR_DOT_COM]: PortfolioProject,
  [CRISTIN_IO_NUXT]: PortfolioProject,
  [POKEMON_INFO_SITE]: PortfolioProject,
  [YOUTUBE_SEARCH]: PortfolioProject,
  [GITHUB_STATS_CARD]: PortfolioProject
}

export const PROJECT_NAMES: {
  [key: string]: string
} = {
  [CRISTIN_IO_GATSBY]: "Gatsby Portfolio Site",
  [CRISTINOCONNOR_DOT_COM]: "React Portfolio Site",
  [CRISTIN_IO_NUXT]: "Nuxt Portfolio Site",
  [POKEMON_INFO_SITE]: "Simple Pokémon Site"
}

export default themeStyles;