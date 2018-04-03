import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // After mounted it will call function tick in each seconds
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timerId);
  }

  // Function tick change date state when called
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
