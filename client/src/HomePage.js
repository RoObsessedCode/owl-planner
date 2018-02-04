import React, { Component } from "react";

import Weather from "./Weather.js";
import MainFocus from "./MainFocus.js"

const OWLSequence = [MainFocus, Weather];

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owlSequence: OWLSequence
    }
    this.tickHandler = this.tickHandler.bind(this)
  }

  tickHandler() {
    let owlSequence = this.state.owlSequence
    if (this.state.owlSequence.length > 1) {
      this.setState({owlSequence: owlSequence.slice(1)})
    } else return null
  }

  render() {
    const Next = this.state.owlSequence[0]
    return <Next tick={this.tickHandler} />
  }
}

export default HomePage
