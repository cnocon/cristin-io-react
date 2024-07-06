import React, { useEffect, useRef, useState } from "react";
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
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const counter = useRef(0);
  const urls = [
    portfolioProjectData[id].imageURL
  ];
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setIsLoadingImages(false);
    }
  }

  return (
    projectData ? (
    <div className="card my-5" style={{flexBasis: "340px"}}>
      <div className="card-body">
        <h3 className="card-title text-center">{projectData?.title}</h3>
        <a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer">


          <img onLoad={imageLoaded} src={projectData?.imageURL} className="card-img" alt={`Go to ${projectData?.title}`} width="340px" height="250" style={{ display: isLoadingImages ? "none" : "block", width: "100%", height: "250px", minHeight: "250px", maxHeight: "250px"}} />

          <div style={{height: "250px", justifyContent: "center", alignItems: "center",  display: isLoadingImages ? "flex" : "none"}}>
            <div className="text-center spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </a>
        <h6 className="mt-4">About</h6>
        <p className="card-text mt-2">{projectData?.description}</p>
        <h6 className="mt-2">Technologies</h6>
        <p className="card-text">{projectData?.technologies.map((tech, index) => index === projectData?.technologies?.length - 1 ? tech : `${tech}, `)}</p>
        <p className="text-center my-4"><a href={projectData?.demoURL} target="_blank" rel="noopener noreferrer">Visit Demo Site</a></p>
      </div>
    </div>
    ) : <p>Loading</p>
  )
};

export default PortfolioProject;
