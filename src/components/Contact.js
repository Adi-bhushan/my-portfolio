import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>Get in Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm currently looking for internship opportunities and would love to connect. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="adibhushan02@gmail.com" className="contact-link">Email</a> 

          
          <a href="https://www.linkedin.com/in/aditi-bhushan-a4944b293/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>


          <a href="https://github.com/Adi-bhushan" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;