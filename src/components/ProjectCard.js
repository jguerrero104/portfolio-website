import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="w-full h-64 bg-gray-900 flex items-center justify-center rounded-lg">
        <img
          src={project.images[0]}
          alt={project.name}
          className="max-h-full max-w-full object-cover rounded-lg"
        />
      </div>
      {/* Project Title */}
      <h3 className="text-xl font-semibold mt-4 truncate">{project.name}</h3>
    </div>
  );
};

export default ProjectCard;
