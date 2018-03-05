import React, { Component } from "react";
import { connect } from "react-redux";
import { ItemTypes } from "../constants";
import { DragSource } from 'react-dnd';

import "../actions/ActionItem.css";

const actionSource = {
  beginDrag(props) {
    return { actionId: props.action.id };
  }
};

const collect = (connectDaD, monitor) => {
  return {
    connectDragSource: connectDaD.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class ActionName extends Component {
  render() {
    const { connectDragSource, isDragging, action } = this.props;
    return connectDragSource(
      <div
        className="ActionItem-Card"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div>{action.name}</div>
      </div>
    );
  }
}

export default DragSource(ItemTypes.ACTION, actionSource, collect)(ActionName);

// const ActionName = ({action}) => {
//   return (
//     <div className="ActionItem-Card">
//       <div>{action.name}</div>
//     </div>
//   )
// }

// export default ActionName;
