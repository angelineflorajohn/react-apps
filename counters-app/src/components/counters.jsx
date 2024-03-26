import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [],
  };

  // function to increment of an individual counter
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // the spread operator ... creates a new array which is the clone of the existing counters array
    const index = counters.indexOf(counter); // find the index of the counter object passed
    counters[index] = { ...counter }; // clone the counter object at the index
    counters[index].value++; // increment the counter
    this.setState({ counters }); // React will update the counter value
  };

  // function to decrement an individual counter
  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // the spread operator ... creates a new array which is the clone of the existing counters array
    const index = counters.indexOf(counter); // find the index of the counter object passed
    counters[index] = { ...counter }; // clone the counter object at the index
    counters[index].value--; // decrement the counter
    this.setState({ counters });
  };

  // function to delete all the counters
  handleDeleteAll = () => {
    console.log("deleting all counters");
    const counters = [];
    this.setState({ counters });
  };

  // function to delete an individual counter
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId); // in react, there is no delete option per se so we create a new array by filtering the counterId value passed
    this.setState({ counters }); // instead of repeating counters as key and value are the same just write it once
  };

  // function to reset the value of all the counters to zero
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    }); // map creates a new array from calling a function for every array element.
    this.setState({ counters });
  };

  // function to add a new counter
  handleAddCounter = () => {
    const counters = [...this.state.counters]; // the spread operator ... creates a new array which is the clone of the existing counters array
    const index = counters.length;

    // verify if the counters array is empty
    if (index === 0) {
      counters.push({ id: 0, value: 0 });
      this.setState({ counters });
    } else {
      let lastObject = counters[counters.length - 1];
      const id = lastObject.id;
      counters.push({ id: id + 1, value: 0 });
      this.setState({ counters });
    }
  };

  render() {
    const { counters } = this.state;
    const numberOfCounters = this.state.counters.length;
    const numberOfCountersWithValue = this.state.counters.filter(
      (c) => c.value > 0
    ).length;
    return (
      <React.Fragment>
        <h1>Counters App</h1>
        <p>
          This is a simple counter app created in React. There are{" "}
          <span style={{ fontSize: 22 }}>{numberOfCounters}</span> counters in
          total and{" "}
          <span style={{ fontSize: 22 }}>{numberOfCountersWithValue}</span>{" "}
          counters with values greater than zero.
        </p>
        <button
          onClick={this.handleAddCounter}
          className="btn btn-primary btn-sm m-2"
        >
          Add counter
        </button>
        <button
          onClick={this.handleReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.handleDeleteAll}
          className="btn btn-danger btn-sm m-1"
        >
          Delete All
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDeleteAll={this.handleDeleteAll}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
