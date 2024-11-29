import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </div>
  );
}

export default ProjectCard;
