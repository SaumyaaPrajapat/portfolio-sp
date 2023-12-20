import React from "react";
import { experiences } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import "./index.css";

const Experience = () => {
  return (
    <div id="experience" className="Container">
      <div className="Wrapper">
        <div className="Title">Experience</div>
        <div className="Desc">My experience</div>
        <div className="TimeLineSection">
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#5997F4" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent className="TimeLineContent">
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
