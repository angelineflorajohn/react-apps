import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement(count) {
    console.log("increment button clicked");
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement(count) {
    console.log("decrement button clicked");
    this.setState({ count: this.state.count - 1 });
  }

  handleDelete() {
    console.log("delete button clicked");
  }

  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <h1>Counters</h1>
        <span className={this.getBadgeClassName()}>
          {this.formatDisplayCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(count)}
          className="btn btn-primary fa fa-plus btn-lg m-1"
        ></button>
        <button
          onClick={() => this.handleDecrement(count)}
          className="btn btn-secondary fa fa-minus btn-lg m-1"
        ></button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger fa fa-trash btn-lg m-1"
        ></button>
      </React.Fragment>
    );
  }

  getBadgeClassName() {
    let className = "badge m-2 badge-";
    className += this.state.count === 0 ? "warning" : "primary";
    return className;
  }

  formatDisplayCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
