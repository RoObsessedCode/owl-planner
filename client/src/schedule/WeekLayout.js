import React, { Component } from "react";

import "./WeeklySchedule.css";

import WeekDay from './WeekDay'


function generateWeekDayDates() {
  const today = Date.now();

  const milliInADay = 86400000;
  const todayIndex = (new Date(today)).getDay();
  const startIndex = 1;
  const endIndex = 7;

  let weekDays = [];
  let weekDates = [];

  let dayInMilli = today - (todayIndex - 1) * milliInADay;
  for (let i = startIndex; i <= endIndex; i++) {
    const theDate = new Date(dayInMilli);
    const theDay = theDate.getDay();
    weekDays.push(theDay);
    weekDates.push(theDate);
    dayInMilli += milliInADay;
  }
 console.log(weekDays, weekDates);
  return [weekDays, weekDates];
}

class WeekLayout extends Component {
  render() {
    const week = generateWeekDayDates();

    const DaysInTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const DatesInTheWeek = week[1];

    return (
      <div className="WeeklySchedule-ScheduleDiv">
        {
          DaysInTheWeek.length &&
          DaysInTheWeek.map((day, i) => {
            return (
              <WeekDay key={day} dayIndex={(i + 1) % 7}dayOfWeek={day} dateOfWeek={DatesInTheWeek[i]} />
            );
          })
        }
      </div>
    );
  }
}


export default WeekLayout;
