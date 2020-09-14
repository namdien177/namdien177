import React from "react";
import "./cv-timeline.scss";

export class CvTimeline extends React.Component {
  render() {
    const from = this.props.from || "unknown";
    const separator = this.props.separator || "-";
    const to = this.props.to || "unknown";
    const subHeader = this.props.subHeader;
    const header = this.props.header || "Unknown";
    const content = this.props.content;

    return (
      <article className="grid cvTimeLine-container">
        <div className="flex flex-d-col cl-grayer timeline-duration">
          <span className="mb02 ta-right">{from}</span>
          <span className="mb02 ta-right">{separator}</span>
          <span className="mb02 ta-right">{to}</span>
        </div>

        <div className="relative user-select-none timeline-handle">
          <div className="absolute top0 left-50 transform-translate-x--50 h100pct line-handle" />
        </div>

        <div className="timeline-content pb4 flex flex-d-col">
          <div className="cl-grayer cvTimeline-sub-header">{subHeader}</div>

          <header className="fw-bold cl-primary mt02 mb02">{header}</header>

          <p className="m0 cl-primary">{content}</p>
          {this.props.children}
        </div>
      </article>
    );
  }
}
