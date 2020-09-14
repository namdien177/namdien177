import React from "react";
import "./cv-section-header.scss";

export class CvSectionHeader extends React.Component {
  render() {
    const iconFa = this.props.iconFa || "fas fa-question";
    const content = this.props.content || "empty";

    return (
      <div className="p1 grid cv-title-container">
        <div className="grid place-item-center br50 icon">
          <i className={iconFa} />
        </div>
        <div className="flex flex-wrap align-items-center fw-lighter content">
          {content}
        </div>
      </div>
    );
  }
}
