import React from "react";

const Weather = props => {
  const {
    weatherPromptHasBeenAsked,
    userWantsWeatherDisplay,
    weatherPrompt,
    weatherDisplay
  } = props;

  if (!weatherPromptHasBeenAsked) {
    return weatherPrompt();
  } else {
    return null;
  }

};
export default Weather;
