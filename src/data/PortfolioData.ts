import { PortfolioProjectType } from "../types/PortfolioTypes"
import { WEATHER_PROJECT_ID } from "../utils/constants/constants"

export const portfolioData = {
  projects: [WEATHER_PROJECT_ID]
}

export const portfolioProjectData: PortfolioProjectType = {
  "weather-app": {
    title: "Weather Search",
    description: "This application allows you to get the weather conditions in almost any city.",
    technologies: ["JavaScript", "React", "Bootstrap", "SASS"]
  },
}