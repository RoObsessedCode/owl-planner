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
  }
  if (weatherPromptHasBeenAsked && userWantsWeatherDisplay) {
    return weatherDisplay();
  }
};
export default Weather;
