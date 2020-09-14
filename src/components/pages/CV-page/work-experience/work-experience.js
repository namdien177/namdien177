import React from "react";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { CvTimeline } from "../../../layouts/cv-content/cv-timeline/cv-timeline";

export class WorkExperience extends React.Component {
  render() {
    return (
      <div className="p1 flex flex-d-col">
        <CvSectionHeader
          iconFa={"fas fa-briefcase"}
          content={"Work Experience"}
        />

        <CvTimeline
          from={"Nov/2018"}
          to={"Now"}
          subHeader={"Full-Stack Developer"}
          header={"JVB Corp"}
          content={
            "Outsourcing of majors Japanese Companies such as Nikkei, SPRASIA JP, ... including developing new features, maintaining and optimizing the current system. Also, responsible for deploying with Docker and CircleCI; and consulting technical solutions."
          }
        >
          <div className="mt05 key-skill-work cl-primary">
            <span className="fw-bold mr02">Key Skills:</span>
            Angular 8+, D3.JS, NodeJS/ExpressJS, PHP Laravel, Docker, CircleCI
          </div>
        </CvTimeline>

        <CvTimeline
          from={"Dec/2017"}
          to={"Jan/2018"}
          subHeader={"Freelancer - Application Developer"}
          header={"VP Bank"}
          content={
            "Personal contact to develop an JavaFX application utilize Zalo API to enhance the customer service."
          }
        >
          <div className="mt05 key-skill-work cl-primary">
            <span className="fw-bold mr02">Key Skills:</span>
            JavaFX, Zalo API
          </div>
        </CvTimeline>
      </div>
    );
  }
}
