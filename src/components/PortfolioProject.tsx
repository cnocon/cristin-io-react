import React from "react";
import { portfolioProjectData } from "../data/PortfolioData";

const PortfolioProject: React.FC<{ id: string }> = ({ id }) => {
  interface IProjectData {
    title: string;
    description: string;
    technologies: string[];
    demoURL: string;
    imageURL: string;
  }
  const projectData: IProjectData = portfolioProjectData?.[id];

  if (!projectData) {
    <p>Loading...</p>
  }
  return (
    projectData ? (
    <div className="card my-5" style={{flexBasis: "340px"}}>
      <div className="card-body">
        <h3 className="card-title text-center">{projectData?.title}</h3>
        <a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer">
          <span style={{display: "block"}}>
            <img src={projectData?.imageURL} className="card-img" alt={`Go to ${projectData?.title}`} />
          </span>
        </a>
        <p className="card-text mt-4">
          {projectData?.description}
          {projectData?.technologies.map((tech, index) => index === projectData?.technologies.length - 1 ? tech : `${tech}, `)}
        </p>
        <p><a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer">Visit Demo Site</a></p>
      </div>
    </div>
    ) : <p>Loading</p>
  )
};

export default PortfolioProject;
