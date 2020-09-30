import React from "react";
import styled from "styled-components";

export class References extends React.Component {
  render() {
    const TitleSideBar = styled.h1`
      font-size: 1.5rem;
      margin: 0;
    `;

    return (
      <div className="flex flex-d-col cl-white">
        <TitleSideBar>References</TitleSideBar>
        <div className="flex flex-d-col mt1">
          <ul className="flex flex-d-col mb2 mt0 ml0 pl0">
            <span className="fw-bold mb05">Doãn Trung Tùng</span>
            <li className="cl-grayer ml15 mb05">
              Head of FPT Greenwich University IT department.
            </li>
            <li className="cl-grayer ml15 mb05">
              <a className="cl-grayer td-none" href="mailto:tungdt27@fe.edu.vn">
                Email: tungdt27@fe.edu.vn
              </a>
            </li>
          </ul>

          <ul className="flex flex-d-col mb2 mt0 ml0 pl0">
            <span className="fw-bold mb05">Nguyễn Văn Trình</span>
            <li className="cl-grayer ml15 mb05">IT Team Leader - JVB Corp</li>
            <li className="cl-grayer ml15 mb05">
              <a
                className="cl-grayer td-none"
                href="mailto:trinhnv@jvb-corp.com"
              >
                Email: trinhnv@jvb-corp.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
