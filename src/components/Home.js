import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home container">
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Aditi Bhushan" className="home-profile-pic" />
      <h1 className="home-title">Aditi Bhushan</h1>
      <h2 className="home-subtitle">Aspiring Full-Stack Web Developer</h2>
      <p className="home-intro">
        I build responsive and user-friendly web applications with a focus on the MERN stack.
      </p>
      <div className="home-buttons">
        <a href="#projects" className="btn btn-primary">View My Projects</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;