import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/projects" className="text-white">Projects</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
