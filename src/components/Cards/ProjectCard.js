import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="ProCard">
      <img className="ProImage" src={project.image} alt="Project Image" />
      <div className="Tags">
        {project.tags?.map((tag, index) => (
          <span key={index} className="Tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="Details">
        <div className="ProjectTitle">{project.title}</div>
        <div className="Date">{project.date}</div>
        <div className="ProjectDesc">{project.description}</div>
      </div>
      <div className="ButtonGroup">
        <Link to={project.github} target="display" className="Button">
          View Code
        </Link>
        <Link to={project.webapp} target="display" className="Button">
          View Site
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
