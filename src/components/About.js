import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen" id="about">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg mb-4 leading-relaxed">
      I’m Jose Guerrero, a full-stack web developer who recently graduated from The University of Texas at San Antonio with a degree in Computer Science. I’m a experienced programmer in a large range of languages, I focus on creating user centric applications, whether that’s an e-commerce platform, a mobile app, or a data driven web service
      </p>
      <p className="text-lg mb-4 leading-relaxed">
      Over the past few years, I’ve developed projects from Android apps and web applications to cloud-based deployments, and I’m always evolving  and learning about the different technologies while experimenting with new languages, frameworks, cloud services, etc. My skill set includes React, Node.js, MongoDB, MySQL, and more. The list of things I learn grows every single day, and I’m always looking for new opportunities to expand my knowledge.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        In my free time, I like finding ways to utilize my skills to improve my everyday life, whether it is creating an application for only me and my friends to use or building something by request. I'm always looking for new opportunities to grow and develop my skills. Being a recent graduate I am looking for opportunities to utilize my skills and knowledge to help a company grow and succeed.
      </p>
      <p className="text-lg leading-relaxed">
        Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to get in touch, head over to the <a href="/contact" className="text-accent hover:underline">Contact</a> page.
      </p>
    </div>
  );
}

export default About;
