import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../constants";


const obsessionTarget = {
  drop(props, monitor, component) {
    const obsessionItem = monitor.getItem()
    console.log('b&m', obsessionItem)
  }
}

const collect = (connectDaD, monitor) => {
  return {
    connectDropTarget: connectDaD.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class TargetSourceObsession extends Component {
  render() {
    const {connectDropTarget, isOver, canDrop} = this.props;

    return connectDropTarget(
      <div>
        <hr />
        <input placeholder="Place Obsession" />

      </div>
    )
  }
}

//export default TargetSourceObsession;

export default DropTarget(ItemTypes.OBSESSION, obsessionTarget, collect)(TargetSourceObsession);
