import React, { Component } from 'react';
import { calculatePreviousPrimeNumber } from 'utils/math';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.state = {
      previousPrime: null,
    };

    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick() {
    this.setState({ previousPrime: calculatePreviousPrimeNumber(this.input.current.value) });
  }

  render() {
    return (
      <div>
        <div>Previous prime number calculator</div>
        <input ref={ this.input }/>
        <button onClick={ this.handleOnclick }>Calculate</button>
        <div>Result: { this.state.previousPrime || 'Not found' }</div>
      </div>
    );
  }
}

Homepage.propTypes = {};
