import { PROJECT_IDS } from "../utils/constants/constants"

export const portfolioData = {
  projects: PROJECT_IDS
}

export interface PortfolioProjectsType {
  [key: string]: PortfolioProjectType
}

export interface PortfolioProjectType { 
  [key: string]: {
    title: string;
    description: string;
    technologies: string[];
    demoURL: string;
    imageURL: string;
  }
};