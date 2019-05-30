import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    counter: 0,
    error: false
  }

  increment = () => {
    if (this.state.error) {
      this.setState({ error: false })
    } else {
      this.setState(prevState => {
        return { counter: prevState.counter + 1 }
      })
    }
  }

  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true })
    } else {
      this.setState(prevState => {
        return { counter: prevState.counter - 1 }
      })
    }
  }

  render () {
    const { counter, error } = this.state
    const errorClass = error ? '' : 'hidden'
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <div data-test='error-message' className={`error ${errorClass}`}>
          The counter cannot go below 0
        </div>

        <button data-test='increment-button' onClick={this.increment}>
          Increment counter
        </button>
        <button data-test='decrement-button' onClick={this.decrement}>
          Decrement counter
        </button>
      </div>
    )
  }
}
