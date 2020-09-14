import React from "react";
import "./introduction.scss";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { IntroFacts } from "./intro-facts/intro-facts";

export class Introduction extends React.Component {
  render() {
    return (
      <div className="p1 grid cv-container-content">
        <CvSectionHeader iconFa={"fas fa-info"} content={"Introduction"} />

        <div className="flex flex-d-col cv-section-content">
          <h3 className="cl-grayer fw-normal mt0 mb02">
            MEAN Stack Developer - Project Consultant
          </h3>

          <p className="cl-primary ta-justify m0">
            As a youthful, avid learner and easy to adapt to the job
            requirements, combined with over 2 years of working in Japan client
            environment as a MEAN stack developer, I will use my best knowledge
            and ability to contribute further to the future success of the
            company.
          </p>

          <h3 className="cl-grayer fw-normal mt2 mb02">Quick Facts</h3>

          <div className="grid IntroFacts-container">
            <IntroFacts
              briefCircleMain={"1st"}
              briefCircleSub={"class"}
              factContent={"Bachelor of Computer Science"}
            />

            <IntroFacts
              briefCircleMain={"1.5"}
              briefCircleSub={"years"}
              factContent={"MEAN Stack Developer"}
            />

            <IntroFacts
              briefCircleMain={"2.5"}
              briefCircleSub={"years"}
              factContent={"Angular Developer"}
            />

            <IntroFacts
              briefCircleMain={"2"}
              factContent={"Major End-Clients"}
            />
          </div>
        </div>
      </div>
    );
  }
}
