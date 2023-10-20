import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [background, setBackGround] = useState(project.img);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setBackGround("");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBackGround(project.img);
  };
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${background})`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="project__content"
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      >
        <h3 className="project_name">{project.name}</h3>
        {/* <img src={project.img} className="project-img" alt="hi" /> */}
        <p className="project__description">{project.description}</p>
        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item) => (
              <li
                key={Math.floor(Math.random() * 1001)}
                className="project__stack-item"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="icons">
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>

          <a
            href={project.livePreview}
            aria-label="live preview"
            className="link link--icon"
          >
            <RocketLaunchIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
