import React from "react";

const BulletinBoard = props => {
  const {
    weatherPromptHasBeenAsked,
    userWantsWeatherDisplay,
    weatherDisplay,
    mainFocusResult
  } = props;

  const renderWeather = weatherPromptHasBeenAsked && userWantsWeatherDisplay;

  return (
    <div>
      <div>{renderWeather && weatherDisplay()}</div>
      <div>{mainFocusResult}</div>

    </div>
  );
};

export default BulletinBoard;

{
  /* <div className="MainFocus-DisplayDiv">
            <textarea className="MainFocus-Display textarea" disabled>
              {this.state.mainFocusResult}
            </textarea>
          </div> */
}
