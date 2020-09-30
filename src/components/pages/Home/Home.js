import React from "react";
import "./Home.scss";

export default class Home extends React.Component {
  toCVPage = () => {
    this.props.history.push("/namdien177/cv-page");
  };

  render() {
    return (
      <div className="grid gap-1 bg-darker cl-white home-container">
        <div className="relative flex of-visible user-select-none background">
          <img
            src="/images/home-face.jpg"
            className="w100pct h100pct obj-fit-cover obj-pos-center"
            alt="home-face"
            loading="lazy"
          />
          <div className="absolute top0 w100pct h100pct bg-darker pseudo-bg" />
        </div>
        <div className="flex p3 pl0 flex-d-col justify-center greetings">
          <h1 className="m0 big-title user-select-none">Hi</h1>
          <span className="m0 cl-grayer small-title user-select-none">
            Welcome to my portfolio. My name is
          </span>
          <h1 className="m0 big-title blue-text user-select-all">
            Đỗ Hoàng Nam
          </h1>

          <hr className="ml0 divider" />

          <span className="cl-grayer small-title user-select-none">I'm a</span>

          <h3 className="m0 medium-title cl-warning">Web Developer!</h3>
          <div className="mt1 btn-section">
            <button onClick={this.toCVPage} className="btn btn-home outline">
              View More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
