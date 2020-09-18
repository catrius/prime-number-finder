import React, { Component } from 'react';
import { calculatePreviousPrimeNumber } from 'utils/math';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.state = {
      previousPrime: null,
    };

    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  calculate() {
    this.setState({ previousPrime: calculatePreviousPrimeNumber(this.input.current.value) });
  }

  handleClick() {
    this.calculate();
  }

  handleKeyPress(e) {
    if(e.key === 'Enter'){
      this.calculate();
    }
  }

  render() {
    return (
      <div>
        <div>Previous prime number calculator</div>
        <input onKeyPress={ this.handleKeyPress } ref={ this.input }/>
        <button onClick={ this.handleClick }>Calculate</button>
        <div>Result: { this.state.previousPrime || 'Not found' }</div>
      </div>
    );
  }
}

Homepage.propTypes = {};
