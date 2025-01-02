import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  return (
    <div className="text-center p-4 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to my portfolio</h1>
      <p className="text-2xl mb-6">Hello, I'm Jose Guerrero.</p>
      <div className="flex space-x-4 mb-6">
        <Link to="/projects" className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-slate-600 ">View My Projects</Link>
        <a href="/JoseGuerreroResume2025.pdf" target="_blank" className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-slate-600">Download Resume</a>
      </div>

      
      {/* Introduction Section*/}
      <div className="mb-12 flex flex-col items-center">
        <img src="/images/picofMe.jpg" alt="Jose Guerrero" className="h-96 w-96 rounded-full shawdow-lg border-4 border-gray-100 object-cover" />
        <p className="text-lg max-w-xl mx-auto leading-relaxed">
          I'm a developer based in San Antonio, Texas, I graduated from UTSA with a degree in Computer Science in December 2024. I specialize in full-stack web development, with experience in both front-end and back-end technologies.
        </p>
      </div>

       {/* Skills Section */}
       <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">DevOps</h3>
            <ul>
              <li>AWS</li>            
              <li>GCP</li>
              <li>Nginx</li>
              <li>Azure</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Other</h3>
            <ul>
              {isOtherOpen ? (
                <>
                  <li>Git</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Linux</li>
                  <li>Unity</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>
                    <button
                      className="text-gray-700 hover:underline mt-2"
                      onClick={() => setIsOtherOpen(false)}
                    >
                      Show Less
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>Git</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>
                    <button
                      className="text-gray-700 hover:underline mt-2"
                      onClick={() => setIsOtherOpen(true)}
                    >
                      Show More
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>



      {/* Featured Projects Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="flex flex-wrap justify-center">
          <Link to="/projects" className="bg-gray-800 p-4 m-2 rounded-lg hover:bg-slate-600 w-60">
            <h3 className="text-xl font-semibold">Tech Assure</h3>
            <p>A MERN stack web application made with 6 group members as part of our User Interfaces final project. It serves as a mock e-commerce Electronics Store.</p>
          </Link>
          <Link to="/projects" className="bg-gray-800 p-4 m-2 rounded-lg hover:bg-slate-600 w-60">
            <h3 className="text-xl font-semibold">Cloud Migration Plan</h3>
            <p>A 20-page mirgation plan for a business to move their proprietary hardware onto the cloud, worked on with my classmates in my Cloud Computing class.</p>
          </Link>
          <Link to="/projects" className="bg-gray-800 p-4 m-2 rounded-lg hover:bg-slate-600 w-60">
            <h3 className="text-xl font-semibold">Clothing Co Database Mangement System</h3>
            <p>This project is a MySQL relational database made for managing a clothing company's operations.</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg">If you’d like to get in touch, feel free to <Link to="/contact" className="text-red-500 hover:underline">contact me</Link>.</p>
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
