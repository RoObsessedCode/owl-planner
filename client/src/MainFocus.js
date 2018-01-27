import React, { Component } from "react";

import "./MainFocus.css";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocusInput: "",
      mainFocusResult: "",
      isVisible: false
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
    this.setState({ isVisible: true });
    this.setState({ mainFocusInput: "" });
  }
  // kyle is awesome
  render() {
    return (
      <div className="MainFocus-HeadDiv">
        <form className="MainFocus-Form" onSubmit={e => this.handleSubmit(e)}>
          <header >
            Which of your obsessions will you tackle today?
          </header>
          <div className="MainFocus-div">
            <textarea
              className="MainFocus-TextArea"
              rows={1}
              placeholder="Today's Main Focus..."
              value={this.state.mainFocusInput}
              onChange={e => this.handleChange(e)}
            />

            <button className="MainFocus-SubmitButton" type="submit" animated>
              Carpe Diem!
            </button>
          </div>
          <div className="MainFocus-Display">
            <div>
              {this.state.isVisible && (
                <textarea >
                  {this.state.mainFocusResult}
                </textarea>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MainFocus;
