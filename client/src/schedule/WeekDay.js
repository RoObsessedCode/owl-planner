import React, { Component } from "react";
import {connect} from 'react-redux'
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../constants";

import "./WeekDay.css";


import { postNewDayObsessions } from '../store';


const obsessionTarget = {
  drop(props, monitor, component) {
    const {obsessionId} = monitor.getItem()
    console.log('PROOOPS', props.dateOfWeek)
    console.log('SULAMITAAAAAAAAAAA', obsessionId)
    let obj = {
      date: props.dateOfWeek,
      obsessionId
    }
    props.addNewDayObsessions(obj)
  }
}

const collect = (connectDaD, monitor) => {
  return {
    connectDropTarget: connectDaD.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()

  }
}


class WeekDay extends Component {
  render() {
    console.log('PROOOOPS', this.props)
    const { obsessions, dayObsessions, connectDropTarget, dayOfWeek, dateOfWeek, dayIndex } = this.props;
    console.log('dateOfWeek', dateOfWeek)
    console.log('dayOfWeek', dayOfWeek)
    console.log('dayObsessions', dayObsessions)
    //console.log('!!!!!!', dateOfWeek)
    const currentDayObsessions = dayObsessions.find((dayOb) => {
      return dayOb.day === dayIndex;
    })

    const filteredObsessions = obsessions.filter((obsession) => {
      if (!currentDayObsessions) return false;
      return currentDayObsessions.obsessionId === obsession.id;
    })
    return connectDropTarget(
      <div className="WeekDay-Card">
        <label className="WeekDay-TitleLabel">{dayOfWeek}</label>
        {
          filteredObsessions.length ? filteredObsessions.map((obsession) => {
            return <div key={obsession.id}>{obsession.name}</div>
          }) : null

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    obsessions: state.obsessions,
    dayObsessions: state.dayObsessions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewDayObsessions(dayObsessions) {
      dispatch(postNewDayObsessions(dayObsessions))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(ItemTypes.OBSESSION, obsessionTarget, collect)(WeekDay));
