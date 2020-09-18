import React, { Component } from 'react';
import Button from '@material/react-button';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {
  Headline4,
} from '@material/react-typography';

import { calculatePreviousPrimeNumber } from 'utils/math';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousPrime: null,
    };

    this.calculate = this.calculate.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  calculate() {
    this.setState({ previousPrime: calculatePreviousPrimeNumber(this.state.input) });
  }

  handleButtonClick() {
    this.calculate();
  }

  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.calculate();
    }
  }

  handleInputChange(e) {
    this.setState({
      input: e.currentTarget.value,
    });
  }

  clearInput() {
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div>
        <Headline4>Previous prime number calculator</Headline4>
        <TextField
          label='Enter a number'
          onTrailingIconSelect={ this.clearInput }
          trailingIcon={ <MaterialIcon role='button' icon='highlight_off'/> }
        >
          <Input
            value={ this.state.input }
            onKeyPress={ this.handleInputKeyPress }
            onChange={ this.handleInputChange }
          />
        </TextField>
        <Button onClick={ this.handleButtonClick }>Calculate</Button>
        <div>Result: { this.state.previousPrime || 'Not found' }</div>
      </div>
    );
  }
}

Homepage.propTypes = {};
