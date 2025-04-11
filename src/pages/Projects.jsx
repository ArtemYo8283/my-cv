import React from 'react';
import { Element } from 'react-scroll';
import './Projects.css';
import projectsData from '../data/projects.json';

const ProjectItem = ({ project }) => (
  <div className="project-item">
    <div className="project-header">
      <h2>
        {project.role} at {project.company}
      </h2>
      <span className="project-duration">{project.duration}</span>
    </div>
    {project.previewImage && (
      <div className="project-preview">
        <img src={`${process.env.PUBLIC_URL}/${project.previewImage}`} alt={`${project.company} preview`} />
      </div>
    )}
    <p className="project-description">{project.description}</p>
    <div className="project-section-sub">
      <h3>Technologies</h3>
      <ul className="project-technologies">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
    {project.requirements && (
      <div className="project-section-sub">
        <h3>Requirements</h3>
        <ul className="project-requirements">
          {project.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    )}
    <div className="project-section-sub">
      <h3>Results</h3>
      <p className="project-results">{project.results}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <Element name="projects" className="projects-section">
      <div className="projects-container">
        <h1>Projects</h1>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
