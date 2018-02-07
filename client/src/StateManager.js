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
      userWantsWeatherDisplay: false,
      mainFocusInput: '',
      mainFocusResult: '',
      hideForm: false
    };
    this.tickHandler = this.tickHandler.bind(this);
    this.askWeatherPrompt = this.askWeatherPrompt.bind(this);
    this.weatherDisplay = this.weatherDisplay.bind(this);
    this.handleWeatherPrompt = this.handleWeatherPrompt.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateMainFocusForm = this.generateMainFocusForm.bind(this);

  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({ mainFocusInput: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ mainFocusResult: this.state.mainFocusInput });
    this.setState({ mainFocusInput: "" });
    this.setState({ hideForm: true });
    this.tickHandler();
  }

  generateMainFocusForm() {
    return (
      <form className="MainFocus-Form" onSubmit={evt => this.handleSubmit(evt)}>
        <header className="MainFocus-Header">
          Which of your obsessions will you tackle today?
        </header>
        <div className="MainFocus-Div">
          <input
            className="MainFocus-TextArea input"
            rows={1}
            placeholder="Today's Main Focus..."
            value={this.state.mainFocusInput}
            onChange={evt => this.handleChange(evt)}
          />

          <button
            className="MainFocus-SubmitButton button is-small is-rounded"
            type="submit"
            animated="true"
          >
            Carpe Diem!
          </button>
        </div>
      </form>
    );
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
    this.setState({
      weatherPromptHasBeenAsked: true,
      userWantsWeatherDisplay: event.target.name === "Yes"
    });
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
          mainFocusForm={this.generateMainFocusForm}
          hideForm={this.state.hideForm}
          mainFocusResult={this.state.mainFocusResult}

        />
        <BulletinBoard
          weatherPromptHasBeenAsked={this.state.weatherPromptHasBeenAsked}
          userWantsWeatherDisplay={this.state.userWantsWeatherDisplay}
          weatherDisplay={this.weatherDisplay}
          mainFocusResult={this.state.mainFocusResult}
        />
      </div>
    );
  }
}

export default StateManager;
