import React from "react";
import "./EducationCard.css";

const EducationCard = ({ education }) => {
  return (
    <div className="EduCard">
      <div className="EduTop">
        <img className="EduImage" src={education.img} alt="School" />
        <div className="Body">
          <div className="Name">{education.school}</div>
          <div className="Degree">{education.degree}</div>
          <div className="Date">{education.date}</div>
        </div>
      </div>
      <div className="Grade">
        <b>Grade:</b> {education.grade}
      </div>
      <div className="EduDescription">
        <span className="EduSpan">{education.desc}</span>
      </div>
    </div>
  );
};

export default EducationCard;
