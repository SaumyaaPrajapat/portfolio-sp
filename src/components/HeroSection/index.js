import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroImage from "../../images/HeroImage.jpg";
import "./index.css";

const Hero = () => {
  return (
    <div id="about" className="HeroContainer">
      <div className="HeroInnerContainer">
        <div className="HeroLeftContainer">
          <div className="Titles">
            Hi, I am <br /> {Bio.name}
          </div>
          <div className="TextLoop">
            I am a
            <span className="Span">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="SubTitle">{Bio.description}</div>
          <a className="ResumeButton" href={Bio.resume} target="display">
            Resume
          </a>
        </div>
        <div className="HeroRightContainer">
          <img className="Img" src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
