import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    const interval = setInterval(this.tick.bind(this), 1000);
    this.interval = interval;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div>
      <h1>{this.state.time.toTimeString().slice(0, 8)}</h1>
      <h1>{this.state.time.toDateString()}</h1>
      </div>);
  }
}

export default Clock;
