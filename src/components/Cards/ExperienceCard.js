import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="ExpCard">
      <div className="ExpTop">
        <img className="ExpImage" src={experience.img} />
        <div className="Body">
          <div className="Role">{experience.role}</div>
          <div className="Company">{experience.company}</div>
          <div className="Date">{experience.date}</div>
        </div>
      </div>
      <div className="ExpDescription">
        {experience?.desc && <span>{experience?.desc}</span>}
        {experience?.skills && (
          <>
            <br />
            <div className="ExpSkills">
              <b>Skills:</b>
              <div className="ItemWrapper">
                {experience?.skills?.map((skill, index) => (
                  <div className="ExpSkill">• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <img className="Document" src={experience.doc} />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
