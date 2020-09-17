import React from "react";
import styled from "styled-components";

export class Certificate extends React.Component {
  render() {
    const TitleSideBar = styled.h1`
      font-size: 1.5rem;
      margin: 0;
    `;

    const CertificateContainer = styled.div`
      margin-top: 1rem;

      > .place {
        font-size: 0.8rem;
        border-bottom: 1px solid var(--mutedColor);
      }

      > .content {
        font-size: 0.8rem;
        padding-left: 0.5rem;
      }
    `;

    return (
      <div className="flex flex-d-col cl-white">
        <TitleSideBar>Certificates</TitleSideBar>

        <CertificateContainer>
          <div className="cl-grayer place mb02">Jul/2016 - Sep/2018</div>
          <div className="fw-bold title mb02">
            BTEC HND Certificate in Computing and Systems Development (QCF)
          </div>
          <div className="content">Distinction grade</div>
        </CertificateContainer>

        <CertificateContainer>
          <div className="cl-grayer place mb02">Sep/2018 - Dec/2018</div>
          <div className="fw-bold title mb02">On-Job-Training Certificate</div>
          <div className="content">Partner: JVB Corp.</div>
        </CertificateContainer>
      </div>
    );
  }
}
