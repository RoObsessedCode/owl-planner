import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postNewGoal } from '../store';

class AddNewGoal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      term: '1-month'
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    const goal = {
      name: this.state.name,
      description: this.state.description,
      term: this.state.term
    };
    this.props.handleSubmit(goal, this.props.match.params.id)
    this.setState({ name: '', description: '', term: '' });
  }


  render() {
    return (
      <form onSubmit={this.submitForm} >
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          Description:
          <textarea type="text" placeholder="provide details" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>

        <label>
          Term:
          <select name="term" value={this.state.value} onChange={this.handleChange}>
            <option value="1-month">1-month</option>
            <option value="3-month">3-month</option>
            <option value="1-year">1-year</option>
            <option value="5-year">5-year</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (newGoal, obsessionId) => {
      dispatch(postNewGoal(newGoal, obsessionId));
      ownProps.history.push(`/obsession/${obsessionId}/goals`);
    }
  }
}
export default connect(null, mapDispatchToProps)(AddNewGoal)
