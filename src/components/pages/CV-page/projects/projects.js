import React from "react";
import "./project.scss";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";
import { CvProjectTable } from "../../../layouts/cv-content/cv-project-table/cv-project-table";

export class Projects extends React.Component {
  render() {
    return (
      <div className="p1 flex flex-d-col cv-project-container">
        <CvSectionHeader iconFa={"far fa-file-code"} content={"Projects"} />

        <div className="flex flex-d-col cv-project-list">
          <CvProjectTable />
        </div>
      </div>
    );
  }
}
