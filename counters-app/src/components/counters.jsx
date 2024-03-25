import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Counters</h1>
        <p>This is a simple counter app created in React.</p>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </React.Fragment>
    );
  }
}

export default Counters;
