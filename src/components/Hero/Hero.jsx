import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./image/react-icon.png" alt="React Icon" />
          </div>
          <img src="./image/ritesh.png.jpeg" alt="Photo" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./image/html.png" alt="HTML-Icon" />
          </div>
          <div className="tech-icon">
            <img src="./image/css-3.png" alt="CSS-Icon" />
          </div>
          <div className="tech-icon">
            <img src="./image/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
