import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import "./index.css";

const Education = () => {
  return (
    <div id="education" className="Container">
      <div className="Wrapper">
        <div className="Title">Education</div>
        <div className="Desc">🎓 My education</div>
        <div className="TimelineSection">
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== education.length && (
                    <TimelineConnector style={{ background: "#5997F4" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent className="TimelineContent">
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
