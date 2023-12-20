import React from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import "./index.css";

const Projects = () => {
  return (
    <div id="projects" className="Container">
      <div className="Wrapper">
        <div className="Title">Projects</div>
        <div className="Desc">📚 Here are some of my projects</div>
        <div className="CardContainer">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
