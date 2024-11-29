import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    { name: 'Projeto 1', description: 'Descrição breve do projeto', image: 'imagem1.jpg', link: 'https://github.com/usuario/projeto1' },
    { name: 'Projeto 2', description: 'Descrição breve do projeto', image: 'imagem2.jpg', link: 'https://github.com/usuario/projeto2' },
  ];

  return (
    <div className="portfolio">
      <h1>Meus Projetos</h1>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
