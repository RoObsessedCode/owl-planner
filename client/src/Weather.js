import React, { Component } from "react";
import ReactWeather from "react-open-weather";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasQuestionBeenAsked: false,
      userWantsWeather: false
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    event.preventDefault()

    this.setState({hasQuestionBeenAsked: true, userWantsWeather: event.target.name === 'Yes'})

  }

  weatherPrompt() {
    return (

      <form>
        <header>Do you want to see the Weather?</header>
        <label>
          Yes
          <button
            name="Yes"

            onClick={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          No
          <button
            name="No"

            onClick={this.handleInputChange}
          />
        </label>
      </form>
    );
  }

  displayWeather() {
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

  render() {
    if (!this.state.hasQuestionBeenAsked) {
      return this.weatherPrompt();
    } else if (this.state.userWantsWeather) {
      return this.displayWeather();
    } else return null;

  }
}

export default Weather;

/*
API Key
42563abc944d896963ce5e118cd746e4
*/
