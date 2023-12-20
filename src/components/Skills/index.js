import React from "react";
import "./index.css";
import { skills } from "../../data/constants";

const Skills = () => {
  return (
    <div className="Container" id="skills">
      <div className="Wrapper">
        <div className="Title">Skills</div>
        <div className="Desc">
          Here are some of my skills which I have been working on for the past 2
          years
        </div>
        <div className="SkillsContainer">
          {skills.map((item) => (
            <div className="Skill">
              <div className="SkillTitle">{item.title}</div>
              <div className="SkillList">
                {item.skills.map((skill) => (
                  <div className="SkillItem">
                    <img
                      className="SkillImage"
                      src={skill.image}
                      alt={skill.name}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
