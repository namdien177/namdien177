import React from "react";
import styled from "styled-components";
import { CvSectionHeader } from "../../../layouts/cv-content/cv-section-header/cv-section-header";

export class SkillLeague extends React.Component {
  render() {
    const CvSkillContainer = styled.div`
      padding-left: 115px;
    `;

    const DivSkill = styled.div`
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem 1rem;
      color: var(--colorPrimary);

      > .sl-container {
        grid-template-columns: max-content auto;
        align-items: center;

        > .sl-circle {
          border: 2px solid var(--mutedColor);
          width: 90px;
          height: 90px;
          font-size: 0.9rem;
          font-weight: bold;
        }
      }
    `;

    return (
      <div className="p1 flex flex-d-col cv-skill-league">
        <CvSectionHeader iconFa={"fas fa-terminal"} content={"Skills"} />

        <CvSkillContainer>
          <DivSkill className="grid">
            <div className="grid sl-container">
              <div className="grid tt-capitalize place-item-center ta-center sl-circle br50 p02">
                Front-end skills
              </div>
              <ul className="m0">
                <li className="fw-bold">Angular 8+</li>
                <li className="fw-bold">D3.JS</li>
                <li>Akita State Management</li>
                <li>Protractor</li>
                <li>ReactJS</li>
              </ul>
            </div>

            <div className="grid sl-container">
              <div className="grid tt-capitalize place-item-center ta-center sl-circle br50 p02">
                Back-end skills
              </div>
              <ul className="m0">
                <li className="fw-bold">NodeJS</li>
                <li>PHP Laravel 5.x</li>
              </ul>
            </div>

            <div className="grid sl-container">
              <div className="grid tt-capitalize place-item-center ta-center sl-circle br50 p02">
                Database
              </div>
              <ul className="m0">
                <li>MongoDB - Mongoose</li>
                <li>MySQL</li>
                <li>SQL Server</li>
              </ul>
            </div>

            <div className="grid sl-container">
              <div className="grid tt-capitalize place-item-center ta-center sl-circle br50 p02">
                Application
              </div>
              <ul className="m0">
                <li>ElectronJS</li>
                <li>Ionic</li>
              </ul>
            </div>
          </DivSkill>

          <div className="fw-normal cl-grayer h4 mt2">More Skills:</div>
          <p className="m0 mt02">
            <span className="fw-bold">Libraries: </span>
            <i>Puppeteer</i>, <i>Simple-git</i>, <i>Simple-oauth2</i>,{" "}
            <i>Onedrive-api</i>
          </p>
          <p className="m0 mt05">
            <span className="fw-bold">Tools: </span>
            <i>WebStorm</i>, <i>VS Code</i>, <i>GitHub Project</i>,{" "}
            <i>Adobe XD</i>
          </p>
        </CvSkillContainer>
      </div>
    );
  }
}
