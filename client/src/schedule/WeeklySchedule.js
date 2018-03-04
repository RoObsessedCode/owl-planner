import React, { Component } from "react";
import { connect } from "react-redux";

import ActionName from '../actions/ActionName';
import { fetchAllActions } from "../store";

import "./WeeklySchedule.css";

class WeeklySchedule extends Component {
  componentDidMount() {
    this.props.loadAllActions();
  }

  render() {
    const { allActions } = this.props;
    console.log("actions -->", allActions);
    return (
      <div>
        <div>
          {allActions.length ? (
            allActions.map(action => {
              return (
                <ActionName key={action.id} action={action} />
              );
            })
          ) : null}
        </div>
        <div className="WeeklySchedule-ScheduleDiv">
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Monday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Tuesday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Wednesday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Thursday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Friday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Saturday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
          <div className="WeeklySchedule-Card">
            <label className="WeeklySchedule-DayLabel">Sunday</label>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
            <hr />
            <div>Take Action Today</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allActions: state.actions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllActions() {
      dispatch(fetchAllActions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklySchedule);

// <label className="WeeklySchedule-Card">Monday</label>
// <label className="WeeklySchedule-Card">Tuesday</label>
// <label className="WeeklySchedule-Card">Wednesday</label>
// <label className="WeeklySchedule-Card">Thursday</label>
// <label className="WeeklySchedule-Card">Friday</label>
// <label className="WeeklySchedule-Card">Saturday</label>
// <label className="WeeklySchedule-Card">Sunday</label>
