import React, { Component } from "react";
import ReactWeather from "react-open-weather";

import Weather from "./Weather.js";
import MainFocus from "./MainFocus.js";
import MakeGreatDay from "./MakeGreatDay.js";
import BulletinBoard from "./BulletinBoard.js";

const OWLSequence = [MainFocus, Weather, MakeGreatDay];

class StateManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owlSequence: OWLSequence,
      weatherPromptHasBeenAsked: false,
      userWantsWeatherDisplay: false
    };
    this.tickHandler = this.tickHandler.bind(this);
    this.askWeatherPrompt = this.askWeatherPrompt.bind(this);
    this.weatherDisplay = this.weatherDisplay.bind(this);
    this.handleWeatherPrompt = this.handleWeatherPrompt.bind(this);
  }

  tickHandler() {
    let owlSequence = this.state.owlSequence;
    if (this.state.owlSequence.length > 1) {
      this.setState({ owlSequence: owlSequence.slice(1) });
    } else {
      return null;
    }
  }

  weatherDisplay() {
    return (
      <div>
        <ReactWeather
          forecast="today"
          apikey="3abb29ddd29045d0ac8165309180102"
          type="city"
          city="Manhattan"
        />
      </div>
    );
  }

  handleWeatherPrompt(event) {
    event.preventDefault();
    this.setState({ weatherPromptHasBeenAsked: true, userWantsWeatherDisplay: event.target.name === 'Yes'});

  }

  askWeatherPrompt() {
    return (
      <form>
        <header>Do you want to see the Weather?</header>
        <label>
          Yes
          <button name="Yes" onClick={this.handleWeatherPrompt} />
        </label>
        <br />
        <label>
          No
          <button name="No" onClick={this.handleWeatherPrompt} />
        </label>
      </form>
    );
  }

  render() {
    const Next = this.state.owlSequence[0];
    return (
      <div>
        <Next
          tick={this.tickHandler}
          weatherPromptHasBeenAsked={this.state.weatherPromptHasBeenAsked}
          userWantsWeatherDisplay={this.state.userWantsWeatherDisplay}
          weatherPrompt={this.askWeatherPrompt}
          weatherDisplay={this.weatherDisplay}

        />
      </div>
    );
  }
}

export default StateManager;
