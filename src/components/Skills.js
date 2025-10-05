import React from 'react';

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router'],
  backend: ['Node.js', 'Express.js'],
  database: ['MongoDB', 'Mongoose'],
  tools: ['Git', 'GitHub', 'VS Code', 'Render', 'Netlify', 'JWT', 'Axios'],
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul className="skill-list">
            {skills.frontend.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul className="skill-list">
            {skills.backend.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <ul className="skill-list">
            {skills.database.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul className="skill-list">
            {skills.tools.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;