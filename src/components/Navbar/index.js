import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import logo from "./logo.png";
import "./index.css";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="Nav">
      <div className="NavContainer">
        <LinkR to="/" className="NavLogo">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div className="Logo">
              <img className="sp" src={logo} alt="Logo" />
              <div className="Span">Portfolio</div>
            </div>
          </a>
        </LinkR>
        <div className="MobileIcon">
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <ul className="NavItems">
          <a href="#about" className="NavLink">
            About
          </a>
          <a href="#skills" className="NavLink">
            Skills
          </a>
          <a href="#experience" className="NavLink">
            Experience
          </a>
          <a href="#projects" className="NavLink">
            Projects
          </a>
          <a href="#education" className="NavLink">
            Education
          </a>
          <a href="#contact" className="NavLink">
            Contact
          </a>
        </ul>
        <div className="ButtonContainer">
          <a href={Bio.github} target="display" className="GithubButton">
            Github Profile
          </a>
        </div>
        {isOpen && (
          <div className={isOpen ? "MobileMenu isOpen" : "MobileMenu"}>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="MobileLink"
            >
              Contact
            </a>
            <a
              href={Bio.github}
              target="display"
              className="GithubButton"
              style={{
                padding: "10px 16px",
                background: "theme.primary",
                color: "white",
                width: "max-content",
              }}
            >
              Github Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
