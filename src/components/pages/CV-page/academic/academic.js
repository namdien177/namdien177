import React from "react";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { CvTimeline } from "../../../layouts/cv-content/cv-timeline/cv-timeline";

export class Academic extends React.Component {
  render() {
    return (
      <div className="p1 flex flex-d-col">
        <CvSectionHeader
          iconFa={"fas fa-graduation-cap"}
          content={"Academic"}
        />

        <CvTimeline
          from={"Jul/2016"}
          to={"Feb/2020"}
          subHeader={"Bachelor in Computer Science"}
          header={"University of Greenwich"}
          content={"FPT branch, Hanoi."}
        >
          <ul className="mt05 cl-primary">
            <li>
              First Class degree in <i>Computer Science</i> field.
            </li>
            <li>
              <a
                className="td-none cl-info"
                href="https://github.com/namdien177/gitme-git-client"
              >
                The final project
              </a>{" "}
              scored 77/100.
            </li>
            <li>
              6 times as <i>Best student of the semester</i> and{" "}
              <i>Highest score in the semester of a subject</i>.
            </li>
          </ul>
        </CvTimeline>
      </div>
    );
  }
}
