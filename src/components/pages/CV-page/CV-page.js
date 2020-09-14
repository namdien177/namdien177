import React from "react";
import "./CV-page.scss";
import ContactPill from "./contact-pill/contact-pill";
import { Introduction } from "./introduction/introduction";
import { Academic } from "./academic/academic";
import { WorkExperience } from "./work-experience/work-experience";
import { Projects } from "./projects/projects";

export default class CVPage extends React.Component {
  render() {
    return (
      <div className="grid cv-container">
        <div className="flex flex-d-col sidebar">
          <div className="grid place-item-center pb1 user-avatar">
            <div className="br50 of-hidden avatar">
              <img
                src="/images/winter-img.jpg"
                className="w100pct h100pct obj-fit-cover obj-pos-center"
                alt="me on Fansipan"
              />
            </div>
          </div>

          <div className="ta-center fw-lighter name">
            <h1 className="m0 cl-white">Đỗ Hoàng Nam</h1>
          </div>

          <hr className="divider-sidebar" />
          <div className="flex flex-d-col contact-info">
            <ContactPill
              iconFa={"fas fa-phone-alt"}
              content={"+84 0817746398"}
            />
            <ContactPill
              iconFa={"fas fa-envelope"}
              content={"do.hoangnam9x@gmail.com"}
            />
            <ContactPill
              iconFa={"fab fa-github"}
              content={"github.com/namdien177"}
            />
            <ContactPill
              iconFa={"fas fa-map-marker-alt"}
              content={"Giai Phong, Hanoi"}
            />
          </div>

          <hr className="divider-sidebar" />
        </div>

        <div className="flex flex-d-col content">
          <Introduction />

          <hr className="divider-content" />

          <Academic />

          <hr className="divider-content" />

          <WorkExperience />

          <hr className="divider-content" />

          <Projects />
        </div>
      </div>
    );
  }
}
