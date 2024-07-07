import React, { useState } from "react";
import { portfolioProjectData } from "../data/PortfolioData";
import ImageWithLoader from "./ImageWithLoader";

const PortfolioProject: React.FC<{ id: string }> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  interface IProjectData {
    title: string;
    description: string;
    technologies: string[];
    demoURL: string;
    imageURL: string;
  }
  const projectData: IProjectData = portfolioProjectData?.[id];

  return (
    <div className="card my-5 shadow" style={{flexBasis: "340px"}}>
      <div className="card-body">
        <h3 className="card-title text-center my-4">{projectData?.title}</h3>
        <a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer">
          <ImageWithLoader
            src={projectData?.imageURL}
            alt={`Go to ${projectData?.title}`}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            style={{borderRadius: "var(--bs-border-radius)", border: "1px solid var(--bs-border-color-translucent)"}}
          />
        </a>
        <h6 className="mt-4">About</h6>
        <p className="card-text mt-2">{projectData?.description}</p>
        <h6 className="mt-2">Technologies</h6>
        <p className="card-text">{projectData?.technologies.map((tech, index) => index === projectData?.technologies?.length - 1 ? tech : `${tech}, `)}</p>
        <p className="text-center my-4"><a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer" className="btn btn-light" style={{color: "rgb(33, 37, 41)", fontWeight: "bolder"}}>Visit Demo Site</a></p>
      </div>
    </div>
  )
};

export default PortfolioProject;
