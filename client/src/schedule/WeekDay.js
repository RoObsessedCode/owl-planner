import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../constants";

import "./WeekDay.css";
import TargetSourceObsession from "./TargetSourceObsession";

class WeekDay extends Component {
  render() {
    const { dayOfWeek, dateOfWeek } = this.props;

    return (
      <div className="WeekDay-Card">
        <label className="WeekDay-TitleLabel">{dayOfWeek}</label>
        <TargetSourceObsession />
        <TargetSourceObsession />
      </div>
    );
  }
}

export default WeekDay;
