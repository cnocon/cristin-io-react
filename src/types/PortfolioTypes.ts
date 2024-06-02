import { WEATHER_PROJECT_ID } from "../utils/constants/constants"

export const portfolioData = {
  projects: [WEATHER_PROJECT_ID]
}

export interface PortfolioProjectsType {
  [key: string]: PortfolioProjectType
}

export interface PortfolioProjectType { 
  [key: string]: {
    title: string,
    description: string,
    technologies: string[]
  }
};