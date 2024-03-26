import React, { Component } from "react";

class Counter extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClassName()}>
            {this.formatDisplayCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary fa fa-plus btn-lg m-1"
          ></button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary fa fa-minus btn-lg m-1"
          ></button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger fa fa-trash btn-lg m-1"
          ></button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClassName() {
    let className = "badge m-2 badge-";
    className += this.props.counter.value === 0 ? "warning" : "primary";
    return className;
  }

  formatDisplayCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
