import React, { useState } from 'react';

const Carousel = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
        >
          ✕
        </button>

        {/* Image Display */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={project.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg w-full max-h-[60vh] object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Next
          </button>
        </div>

        {/* Project Details */}
        <h2 className="text-3xl font-bold text-white">{project.name}</h2>
        <p className="text-gray-300 mt-2">{project.description}</p>
        <div className="flex justify-center mt-4 space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              GitHub
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
