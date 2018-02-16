import React, { Component } from "react";
import { Link } from "react-router-dom";
import owl from "./owl.jpg";
import "./App.css";
import "bulma/css/bulma.css";
import MainFocus from "./MainFocus";

class App extends Component {
  constructor() {
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
        </div>
        <div >{this.props.children}</div>
      </div>
    );
  }
}

export default App;
