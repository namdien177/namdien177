import React from "react";

export class IntroFacts extends React.Component {
  render() {
    const briefCircleMain = this.props.briefCircleMain || "0";
    const briefCircleSub = this.props.briefCircleSub;
    const factContent = this.props.factContent || "Unset";

    return (
      <div className="grid gap-1 IntroFacts">
        <div className="flex flex-d-col circle-info">
          <div className="of-hidden m15 relative fw-bold mb1 br50 circle-brief">
            <div className="absolute flex flex-d-col align-items-center top-50 left-50 transform-translate--50 brief-content">
              <span>{briefCircleMain}</span>
              {briefCircleSub && briefCircleSub.length > 0 && (
                <small className="cl-grayer">{briefCircleSub}</small>
              )}
            </div>
          </div>
          <span className="ta-center">{factContent}</span>
        </div>
      </div>
    );
  }
}
