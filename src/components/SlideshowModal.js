import React, { useState, useEffect } from 'react';

const SlideshowModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  const [transformScale, setTransformScale] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
    resetZoom();
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
    resetZoom();
  };

  const resetZoom = () => {
    setZoomed(false);
    setTransformScale(1);
    setTransformOrigin('center center');
  };

  const handleMouseClick = (e) => {
    if (zoomed) {
      resetZoom();
    } else {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setTransformOrigin(`${x}% ${y}%`);
      setTransformScale(2); // Adjust scale for zoom level
      setZoomed(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative max-w-4xl w-full mx-4 overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
        >
          ✕
        </button>

        {/* Image Slideshow */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={project.images[currentImageIndex]}
            alt={project.name}
            className="rounded-lg max-h-[70vh] max-w-full cursor-zoom-in"
            style={{
              transformOrigin: transformOrigin,
              transform: `scale(${transformScale})`,
              transition: 'transform 0.3s ease, transform-origin 0.3s ease',
            }}
            onClick={handleMouseClick}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevImage}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={nextImage}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Next
          </button>
        </div>

        {/* Project Details */}
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>

        {/* Links */}
        <div className="flex justify-center mt-4 space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-gray-400"
            >
              <img src="/images/github-mark-white.png" alt="GitHub" className="h-8 w-8" />
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-gray-400"
            >
              <img src="/images/browser.png" alt="Website" className="h-8 w-8" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideshowModal;
