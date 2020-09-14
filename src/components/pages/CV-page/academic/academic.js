import React from "react";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { CvTimeline } from "../../../layouts/cv-content/cv-timeline/cv-timeline";

export class Academic extends React.Component {
  render() {
    return (
      <div className="p1 flex flex-d-col">
        <CvSectionHeader
          iconFa={"fas fa-graduation-cap"}
          content={"Academic & Certificates"}
        />

        <CvTimeline
          from={"Jul/2016"}
          to={"Feb/2019"}
          subHeader={"Bachelor in Computer Science"}
          header={"University of Greenwich"}
          content={"FPT branch, Hanoi."}
        />

        <CvTimeline
          from={"Jul/2016"}
          to={"Sep/2018"}
          subHeader={
            "BTEC HND Certificate in Computing and Systems Development (QCF)"
          }
          header={"FPT Greenwich, FPT University"}
          content={
            "Distinction grade in BTEC HND (Business And Technology Education Council Higher National Diploma)."
          }
        />

        <CvTimeline
          from={"Sep/2018"}
          to={"Dec/2018"}
          subHeader={"On-Job-Training Certificate"}
          header={"FPT Greenwich, FPT University"}
          content={
            "Intern Program allows student to gain practical working experience while still in school."
          }
        />
      </div>
    );
  }
}
