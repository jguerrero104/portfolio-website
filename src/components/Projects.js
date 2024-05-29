import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import SlideshowModal from './SlideshowModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto p-4 bg-primary text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
        ))}
      </div>
      {selectedProject && <SlideshowModal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
};

export default Projects;
