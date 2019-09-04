import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div className="stepper">
        <button onClick={this.incrementCounter}>+</button>
        <h3>{this.state.counter}</h3>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }

}

export default App;
