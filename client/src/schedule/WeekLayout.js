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

/*
sunday - 0
monday - 1
tuesday - 2
wednesday - 3
thursday - 4
friday - 5
saturday - 6

*/
function generateWeekDayDates() {
  const today = Date.now()

  const milliInADay = 86400000
  const todayIndex = (new Date(today)).getDay()
  const startIndex = 1
  const endIndex = 7

  let weekDays = []
  let weekDates = []

  let dayInMilli = today - (todayIndex - 1) * milliInADay
  for (let i = startIndex; i <= endIndex; i++) {
    const theDate = new Date(dayInMilli)
    const theDay = theDate.getDay()
    weekDays.push(theDay)
    weekDates.push(theDate)
    dayInMilli += milliInADay
  }
 console.log(weekDays, weekDates)
  return [weekDays, weekDates]
}

class WeekLayout extends Component {
  render() {


    const week = generateWeekDayDates()
    // console.log('lets see: ', week)

    const { x, y, connectDropTarget, isOver } = this.props;
    const DaysInTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const DatesInTheWeek = week[1];
    // console.log('bunnnnnnnies', week[1])
    return (
      <div className="WeeklySchedule-ScheduleDiv">
        {
          DaysInTheWeek.length &&
          DaysInTheWeek.map((day, i) => {
            return (
              <WeekDay key={day} dayIndex={(i+1)%7}dayOfWeek={day} dateOfWeek={DatesInTheWeek[i]} />
            );
          })
        }
      </div>
    )
  }
}

// export default DropTarget(ItemTypes.ACTION, weekDayTarget, collect)(WeekLayout);

export default WeekLayout;
