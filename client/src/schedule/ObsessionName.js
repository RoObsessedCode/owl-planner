import React, { Component } from "react";
import { ItemTypes } from "../constants";
import { DragSource } from "react-dnd";

import "../obsessions/ObsessionItem.css";

const obsessionSource = {
  beginDrag(props) {
    return { obsessionId: props.obsession.id };
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      console.log('it dropped')
    }
  }
};

const collect = (connectDaD, monitor) => {
  return {
    connectDragSource: connectDaD.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class ObsessionName extends Component {
  render() {
    const { connectDragSource, isDragging, obsession } = this.props;
     return connectDragSource(
      <div
        className="ObsessionItem-Card"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div>{obsession.name}</div>
      </div>
    );
  }
}

export default DragSource(ItemTypes.OBSESSION, obsessionSource, collect)(ObsessionName);
