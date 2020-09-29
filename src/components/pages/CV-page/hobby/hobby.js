import React from "react";
import styled from "styled-components";

export class Hobby extends React.Component {
  render() {
    const TitleSideBar = styled.h1`
      font-size: 1.5rem;
      margin: 0;
    `;

    const HobbyContent = styled.div`
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
    `;

    const HobbyPanel = styled.div`
      user-select: none;
      position: relative;
      font-size: 1.5rem;
      padding-bottom: 100%;

      i {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
    `;

    return (
      <div className="flex flex-d-col cl-white">
        <TitleSideBar className="hobby-title">Hobbies</TitleSideBar>
        <HobbyContent className="mt1 cursor-pointer grid hobby-content">
          <HobbyPanel className="cl-primary bg-white hobby-panel">
            <i className="fas fa-laptop-code" />
          </HobbyPanel>
          <HobbyPanel className="cl-primary bg-white hobby-panel">
            <i className="fas fa-music" />
          </HobbyPanel>
          <HobbyPanel className="cl-primary bg-white hobby-panel">
            <i className="fas fa-film" />
          </HobbyPanel>
          <HobbyPanel className="cl-primary bg-white hobby-panel">
            <i className="fas fa-coffee" />
          </HobbyPanel>
          <HobbyPanel className="cl-primary bg-white hobby-panel">
            <i className="fas fa-gamepad" />
          </HobbyPanel>
        </HobbyContent>
      </div>
    );
  }
}
