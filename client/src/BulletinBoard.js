import React from "react";

const BulletinBoard = props => {
  const {
    weatherPromptHasBeenAsked,
    userWantsWeatherDisplay,
    weatherDisplay
  } = props;

  const renderWeather = weatherPromptHasBeenAsked && userWantsWeatherDisplay;

  return <div>{renderWeather && weatherDisplay()}</div>;
};

export default BulletinBoard;

{
  /* <div className="MainFocus-DisplayDiv">
            <textarea className="MainFocus-Display textarea" disabled>
              {this.state.mainFocusResult}
            </textarea>
          </div> */
}
