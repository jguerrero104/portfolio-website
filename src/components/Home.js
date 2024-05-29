import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-4 bg-primary text-white min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to my portfolio</h1>
      <p className="text-2xl mb-6">Hello, I'm Jose Guerrero.</p>
      
      {/* Introduction Section*/}
      <div className="mb-6 flex flex-col items-center">
        <img src="/images/picofMe.jpg" alt="Jose Guerrero" className="h-80 w-70 rounded-full mb-4" />
        <p className="text-lg max-w-xl mx-auto leading-relaxed">
          I'm a developer based in San Antonio, Texas, graduating from UTSA with a degree in Computer Science in December 2024. I specialize in full-stack web development, with experience in both front-end and back-end technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <span>React</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>Git</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MySQL</span>
          <span>C</span>
          <span>AWS</span>
          <span>Nginx</span>
          <span>Unity</span>
          <span>C#</span>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="flex flex-wrap justify-center">
          <Link to="/projects" className="bg-secondary p-4 m-2 rounded-lg hover:bg-secondary-light w-60">
            <h3 className="text-xl font-semibold">Runner Bay</h3>
            <p>A fullstack web application that acts as a marketplace for UTSA students to buy and sell items.</p>
          </Link>
          <Link to="/projects" className="bg-secondary p-4 m-2 rounded-lg hover:bg-secondary-light w-60">
            <h3 className="text-xl font-semibold">Pizza Guy Game</h3>
            <p>2D pixel art game where you play as a pizza delivery guy.</p>
          </Link>
          <Link to="/projects" className="bg-secondary p-4 m-2 rounded-lg hover:bg-secondary-light w-60">
            <h3 className="text-xl font-semibold">CPU Scheduler</h3>
            <p>A CPU scheduler simulator using FIFO, SJF, and PR algorithms.</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg">If you’d like to get in touch, feel free to <Link to="/contact" className="text-accent hover:underline">contact me</Link>.</p>
      </div>

      {/* Follow Me Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Follow Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/jguerrero104" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
            <img src="/images/github-mark-white.png" alt="GitHub" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/jose-guerrero-a57771250/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
            <img src="/images/LI-In-bug.png" alt="LinkedIn" className="h-8 w-25" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
