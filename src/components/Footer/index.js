import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaCopyright } from "react-icons/fa";
import { Bio } from "../../data/constants";
import "./index.css";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterWrapper">
        <div className="FooterSpan">Saumyaa Prajapat</div>
        <div className="Text">
          <FaCopyright className="CopyrightIcon" />
          <a className="TextLink" href="/">
            2023. All rights reserved
          </a>
        </div>
        <div className="SocialMedia">
          <a className="SocialMediaIcon" href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </a>
          <a className="SocialMediaIcon" href={Bio.github} target="display">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
