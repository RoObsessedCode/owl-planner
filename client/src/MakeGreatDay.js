import React, { Component } from "react";

class MakeGreatDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greatDayInput: '',
      greatDayResult: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ greatDayInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ greatDayResult: this.state.greatDayInput });
    this.setState({ greatDayInput: '' });
  }

  generateMakeGreatDay() {
    return (
      <form onSubmit={evt => this.handleSubmit(evt)}>
        <header>What will you do to make it a great day</header>
        <div>
          <input
            placeholder="Make It A Great Day"
            value={this.state.greatDayInput}
            onChange={evt => this.handleChange(evt)}
          />
          <button type="submit">Great Day</button>
        </div>
      </form>
    );
  }

  render() {
    console.log("are we getting here")
    return this.generateMakeGreatDay();
  }
}

export default MakeGreatDay;

// What will you do, despite the weather outside, to make it a great day

// What will you do, following the pattern of good weather outside, to make it a great day
