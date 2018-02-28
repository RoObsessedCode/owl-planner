import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postNewAction } from '../store';

class AddNewAction extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      duration: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  submitForm(event) {
    event.preventDefault();
    const action = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration
    };
    this.props.handleSubmit(action, this.props.match.params.id)
    this.setState({ name: '', description: '', duration: '' });

  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          Description:
          <textarea type="text" placeholder="provide details" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>

        <label>
          Duration:
          <textarea type="text" placeholder="How long will you spend?" name="duration" value={this.state.duration} onChange={this.handleChange} />
        </label>

        <button type="submit">Submit</button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (newAction, goalId) => {
      dispatch(postNewAction(newAction, goalId));
      ownProps.history.push(`/goal/${goalId}/actions`)
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNewAction);
