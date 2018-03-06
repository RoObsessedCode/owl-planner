import React, { Component } from "react";
import { DropTarget } from 'react-dnd';
import { ItemTypes } from "../constants";

import "./WeeklySchedule.css";

import WeekDay from './WeekDay'


// const weekDayTarget = {
//   drop(props, monitor, component) {

//   }
// }

// const collect = (connectDAD, monitor) => {
//   return {
//     connectDropTarget: connectDAD.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop()
//   }
// }

class WeekLayout extends Component {
  render() {

    const { x, y, connectDropTarget, isOver } = this.props;
    const DaysInTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className="WeeklySchedule-ScheduleDiv">
        {
          DaysInTheWeek.length &&
          DaysInTheWeek.map((day) => {
            return (
              <WeekDay key={day} dayOfWeek={day} />
            );
          })
        }
      </div>
    )
  }
}

// export default DropTarget(ItemTypes.ACTION, weekDayTarget, collect)(WeekLayout);

export default WeekLayout;
