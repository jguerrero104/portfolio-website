import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer bg-secondary p-4 rounded-lg shadow-lg hover:bg-secondary-light transition duration-300">
      <img src={project.images[0]} alt={project.name} className="rounded-lg w-full" />
      <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
    </div>
  );
}

export default ProjectCard;
