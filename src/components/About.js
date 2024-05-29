import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-primary text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-xl mb-4 leading-relaxed">
        I'm Jose Guerrero, a developer based in San Antonio, Texas. I specialize in full-stack web development, with experience in both front-end and back-end technologies. I'm passionate about creating interactive and user-friendly applications that provide value to users.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        My journey began at The University of Texas at San Antonio, where I studied Computer Science. Since then, I have worked on numerous projects, ranging from web applications and Android applications to games and low-level operating system projects.
      </p>
      <p className="text-lg mb-4 leading-relaxed">
        In my free time, I enjoy expanding my knowledge of programming languages and frameworks, as well as working on personal projects. I'm always looking for new opportunities to grow and develop my skills. As I near my graduation date, I am currently seeking an internship or a full-time position in software development.
      </p>
      <p className="text-lg leading-relaxed">
        Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to get in touch, head over to the <a href="/contact" className="text-accent hover:underline">Contact</a> page.
      </p>
    </div>
  );
}

export default About;
