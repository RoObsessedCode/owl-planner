import React, { Component } from "react";

import "./MainFocus.css";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocusInput: '',
      mainFocusResult: '',
      isVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({ mainFocusInput: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ mainFocusResult: this.state.mainFocusInput })
    this.setState({ isVisible: true })
    this.setState({ mainFocusInput: "" })
  }
  // kyle is awesome
  render() {
    return (
      <form className="MainFocus-Form" onSubmit={e => this.handleSubmit(e)}>
        <header className="MainFocus-Header">
          Which of your obsessions will you tackle today?
        </header>
        <div className="MainFocus-Div">
          <input
            className="MainFocus-TextArea input"
            rows={1}
            placeholder="Today's Main Focus..."
            value={this.state.mainFocusInput}
            onChange={e => this.handleChange(e)}
          />

          <button
            className="MainFocus-SubmitButton button is-small is-rounded"
            type="submit"
            animated
          >
             Carpe Diem!
          </button>
        </div>
        {this.state.isVisible && (
          <div className="MainFocus-DisplayDiv">
            <textarea className="MainFocus-Display textarea" disabled>
              {this.state.mainFocusResult}
            </textarea>
          </div>
        )}
      </form>
    );
  }
}

export default MainFocus;
