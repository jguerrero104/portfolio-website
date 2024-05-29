import React, { useState } from 'react';

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-secondary p-4 rounded-lg shadow-lg relative max-w-6xl w-full mx-2 overflow-auto max-h-screen">
        <button 
          onClick={onClose} 
          className="absolute top-0 right-0 m-2 text-white bg-accent hover:bg-red-700 p-2 border border-white"
          style={{ zIndex: 10 }}
        >
          X
        </button>
        <div className="flex justify-center items-center mb-2 zoom-container">
          <img
            src={project.images[currentImageIndex]}
            alt={project.name}
            className="rounded-lg max-h-[80vh] max-w-full cursor-zoom-in"
            style={{
              transformOrigin: transformOrigin,
              transform: `scale(${transformScale})`,
              transition: 'transform 0.3s ease, transform-origin 0.3s ease'
            }}
            onClick={handleMouseClick}
          />
        </div>
        <div className="flex justify-between mb-2">
          <button onClick={prevImage} className="bg-gray-700 text-white p-2 rounded">Previous</button>
          <button onClick={nextImage} className="bg-gray-700 text-white p-2 rounded">Next</button>
        </div>
        <h3 className="text-3xl font-bold mt-2">{project.name}</h3>
        <p className="mt-2 whitespace-pre-wrap text-lg">{project.description}</p>
        <div className="flex justify-center mt-4 space-x-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/github-mark-white.png" alt="GitHub" className="h-8 w-8" />
            </a>
          )}
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/browser.png" alt="Website" className="h-8 w-8" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideshowModal;
