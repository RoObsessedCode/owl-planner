import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNewGoal extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <form >
        <label>
          Name:
          <input type="text"/>
        </label>

        <label>
          Description:
          <input type="text"/>
        </label>

        <label>
          Term:
          <select>
            <option value="1-month">1-month</option>
            <option value="3-month">3-month</option>
            <option value="1-year">1-year</option>
            <option value="5-year">5-year</option>
          </select>
        </label>


      </form>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {

}
export default connect(null, mapDispatchToProps)(AddNewGoal)
