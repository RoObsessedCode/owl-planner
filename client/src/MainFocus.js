import React, { Component } from "react";

import "./MainFocus.css";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocusInput: '',
      mainFocusResult: '',
      userEstablishedMainFocus: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({ mainFocusInput: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ mainFocusResult: this.state.mainFocusInput });
    this.setState({ userEstablishedMainFocus: true });
    this.setState({ mainFocusInput: "" });
    this.props.tick()
  }

  generateMainFocus() {
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

  render() {
    if (!this.state.userEstablishedMainFocus) {
      return this.generateMainFocus()
    } else {
      return null
    }
  }
}

export default MainFocus
