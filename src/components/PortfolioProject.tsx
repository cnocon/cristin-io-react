  import React, { useState } from "react";
import { PROJECT_COMPONENTS, PROJECT_NAMES } from "../utils/constants/constants";

const PortfolioProject: React.FC<{ id: string }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ProjectComponent = PROJECT_COMPONENTS[id];
  const projectName = PROJECT_NAMES[id];
  const isFirstProject = id === "weather-app"

  return (
    <div className="accordion-item">
      <h2 className="h2 accordion-header" id={`heading-${id}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={isOpen} aria-controls={id} onClick={(e) => setIsOpen(!isOpen)}>
          {projectName}
        </button>
      </h2>
      <div id={id} className={`${isOpen || (!isOpen && isFirstProject) ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}`} aria-labelledby={`heading-${id}`} data-bs-parent="#projects">
        <div className="accordion-body">
          <ProjectComponent />
        </div>
      </div>
    </div>
  )
};

export default PortfolioProject;
