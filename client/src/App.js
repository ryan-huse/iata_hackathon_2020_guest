import React, { Component, Fragment } from "react";

import logo from "./logo.svg";

import "./Css/App.css";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(
      `/api/hello?barcodeID=${this.state.post}`
    ).catch(err => console.log(err));
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    var stuff = [];
    stuff.push(body);
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.responseToPost.map((element, index) => (
          <Fragment>
            {console.log(element.data)}
            <img src={`data:image/png;base64,${element.data}`}></img>
            <p>{new Date(element.metadata.date).toLocaleString()}</p>
            <p>Airline: {element.metadata.airline}</p>
            <p>Airport: {element.metadata.airport}</p>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default App;
