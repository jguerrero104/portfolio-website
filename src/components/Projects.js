import React, { useState } from 'react';
import projects from '../data/projects';
import Carousel from './Carousel';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseCarousel = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="rounded-lg w-full h-fill object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
          </div>
        ))}
      </div>

      {/* Carousel Modal */}
      {selectedProject && (
        <Carousel project={selectedProject} onClose={handleCloseCarousel} />
      )}
    </div>
  );
};

export default Projects;
