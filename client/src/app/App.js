import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import owl from "./owl.jpg";
import "./App.css";



class App extends Component {
  constructor(props) {
    super();
    this.state = {
      response: ""
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={owl} className="App-logo" alt="logo" />
          <h1 className="App-title">Obsessed With Life</h1>
          <Link to={"/ao"}>
            <button>Obsessions</button>
          </Link>
          <Link to={"/WeeklySchedule"}>
            <button >Schedule</button>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default App;
