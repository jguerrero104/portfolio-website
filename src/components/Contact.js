import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-primary text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <div className="text-lg mb-8">
        <p className="mb-4">Feel free to reach out to me through any of the following channels:</p>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">Email</h2>
          <p className="text-accent hover:underline">
            <a href="mailto:jguerrero110761@gmail.com">jguerrero110761@gmail.com</a>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">LinkedIn</h2>
          <div className="flex items-center mb-2">
            <p className="text-accent hover:underline">
              <a href="https://www.linkedin.com/in/jose-guerrero-a57771250/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jose-guerrero-a57771250/
              </a>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">GitHub</h2>
          <div className="flex items-center mb-2">
            <p className="text-accent hover:underline">
              <a href="https://github.com/jguerrero104" target="_blank" rel="noopener noreferrer">
                github.com/jguerrero104
              </a>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">Additional Resources</h2>
          <p className="text-accent hover:underline mb-2">
            <a href="/resume-JG.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
          <p className="text-accent hover:underline">
            <a href="https://github.com/jguerrero104/portfolio-website" target="_blank" rel="noopener noreferrer">This website's repository</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
