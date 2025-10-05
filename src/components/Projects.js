import React from 'react';

const projectData = [
  {
    title: 'FlavorVerse - Recipe Sharing App',
    description: 'A full-stack MERN application where users can share, discover, and save their favorite recipes. Features secure JWT authentication, a favorites system, and a user profile page.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    liveLink: 'https://flavorverse08.netlify.app/',
    codeLink: 'https://github.com/Adi-bhushan/Flavorverse',
  },
  {
    title: 'Petal and Hue: A Full-Stack MERN E-Commerce Platform',
    description: 'Petal and Hue is a complete, full-stack e-commerce web application built from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js). It showcases a feature-rich, responsive, and secure platform that mimics a real-world online shopping experience from start to finish.',
    technologies: ['MERN Stack', 'JWT', 'Redux'],
    liveLink: 'https://petal-and-hue.netlify.app/',
    codeLink: 'https://github.com/Adi-bhushan/Petal-and-Hue',
  },
  {
    title: ' Kashi Mitra - AI Chatbot for Varanasi',
    description: 'A sophisticated, AI-powered chatbot that acts as a virtual tour guide for the holy city of Varanasi, India.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'External AI API'],
    liveLink: 'https://kashi-mitra-chatbot.streamlit.app/', 
    codeLink: 'https://github.com/Adi-bhushan/kashi-mitra-chatbot',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;