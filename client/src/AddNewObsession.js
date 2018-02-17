import React, { Component } from "react";
import { connect } from 'react-redux';

import './AddNewObsession';
import { postNewObsession } from "./store";

class AddNewObsession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      purpose: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    const obsession = {
      name: this.state.name,
      description: this.state.description,
      purpose: this.state.purpose
    };

    this.props.handleSubmit(obsession);
    this.setState({name: '', description: '', purpose: ''});
  }

  render() {
    return (
      <form className="AddNewObsession-Form" onSubmit={this.submitForm}>
        <label >
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label >
          Description:
          <input type="text" placeholder="Provide details" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label >
          Purpose:
          <input type="text" placeholder="Why is this life obsession important to you?" name="purpose" value={this.state.purpose} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>

      </form>
    )
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (newObsession) => {
      dispatch(postNewObsession(newObsession))
      ownProps.history.push('/ao');
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNewObsession);
