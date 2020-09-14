import React from "react";
import "./contact-pill.scss";

export default class ContactPill extends React.Component {
  render() {
    const iconFa = this.props.iconFa || "fas fa-question";
    const content = this.props.content || "empty";
    return (
      <div className="grid align-items-center contact-pill">
        <div className="grid place-item-center br50 cl-sidebar bg-white icon">
          <i className={iconFa} />
        </div>

        <div className="cl-white text">{content}</div>
      </div>
    );
  }
}
