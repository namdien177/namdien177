import React from "react";
import "./project.scss";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { CvProjectTable } from "../../../layouts/cv-content/cv-project-table/cv-project-table";
import { CvTimeline } from "../../../layouts/cv-content/cv-timeline/cv-timeline";

export class Projects extends React.Component {
  render() {
    const jasso = {
      "Team size": "3 man-month",
      Position: "Developer",
      Responsibility:
        "Developing Client-Side UI and create some API to fetch data",
      "Technology used": "PHP Laravel 5.x, Bootstrap Argon, JQuery",
    };

    const bbs = {
      "Team size": "16 man-month",
      Position: "Developer",
      Responsibility: "Developing client UI and some server side API",
      "Technology used": "PHP Laravel 5.x, Bootstrap, JQuery, Angular 8",
    };

    const slotMachine = {
      "Team size": "1 man-month",
      Position: "Developer, Project Technology Consultant",
      Responsibility:
        "Developing client-side and Upgrade technology from a Flash-based system to Angular 8 SPA system",
      "Technology used": "Angular 8, Akita State Management, PrimeNG",
    };

    const chartBuilder = {
      "Team size": "2 man-month",
      Position: "Developer, Project Technology Consultant",
      Responsibility:
        "Developing new feature, graphs and maintaining the system and technical solution consultant",
      "Technology used":
        "NodeJS (Express TypeScript), Angular 8, D3.JS, Puppeteer, rsvg-convert, Protractor, Docker",
    };

    return (
      <div className="p1 flex flex-d-col cv-project-container">
        <CvSectionHeader iconFa={"far fa-file-code"} content={"Projects"} />

        <CvTimeline
          from={"Nov/2018"}
          to={"May/2019"}
          subHeader={"Sprasia"}
          header={"Jasso Web System"}
          content={
            "Internal web system to manage and deliver information to thousands of university in Japan"
          }
        >
          <CvProjectTable projectInfo={jasso} />
        </CvTimeline>

        <CvTimeline
          from={"May/2019"}
          to={"Jul/2019"}
          subHeader={"JVB Corp"}
          header={"JVB BBS managing system"}
          content={
            "System to managing schedule and employee information of JVB Corp."
          }
        >
          <CvProjectTable projectInfo={bbs} />
        </CvTimeline>

        <CvTimeline
          from={"Jul/2019"}
          to={"Sep/2019"}
          subHeader={"Wize"}
          header={"Wize Slot Machine"}
          content={"SPA Web System to managing slot machines"}
        >
          <CvProjectTable projectInfo={slotMachine} />
        </CvTimeline>

        <CvTimeline
          from={"Sep/2019"}
          to={"Now"}
          subHeader={"Wize - Nikkei JP"}
          header={"Wize CMS Chart Builder"}
          content={
            "A website allows user to generate different graphs with provided data and able to export it to many different file type (PNG, HTML, SVG, PDF)"
          }
        >
          <CvProjectTable projectInfo={chartBuilder} />
        </CvTimeline>
      </div>
    );
  }
}
