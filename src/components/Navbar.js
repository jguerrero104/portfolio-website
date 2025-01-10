import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding or Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links for Larger Screens */}
        <div
        className={`
          ${isOpen ? "block" : "hidden"} 
          md:flex 
          flex-col md:flex-row 
          space-y-4 md:space-y-0 md:space-x-4 
          text-white text-lg
        `}
        >
          <Link
            to="/"
            className="hover:text-slate-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-slate-600 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-slate-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
