import React, { Component } from "react";

import "./MainFocus.css";

import BulletinBoard from "./BulletinBoard.js";
import Weather from "./Weather.js";
class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocusInput: "",
      mainFocusResult: "",
      hideForm: false
    };
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
    this.props.tick();
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

  render() {
    if (this.state.hideForm) {
      return null;
    } else {
      return this.generateMainFocusForm();
    }

  }
}

export default MainFocus;
