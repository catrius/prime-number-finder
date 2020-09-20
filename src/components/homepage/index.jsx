import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Headline5 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import styles from './homepage.module.sass';

import { calculatePreviousPrimeNumber } from 'utils/math';


export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: 'Input your number above',
    };

    this.calculate = this.calculate.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  calculate() {
    this.setState({
      output: calculatePreviousPrimeNumber(this.state.input),
    });
  }

  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.calculate();
    }
  }

  handleButtonClick() {
    this.calculate();
  }

  handleInputChange(e) {
    this.setState({
      input: e.currentTarget.value,
    });
  }

  clearInput() {
    this.setState({
      input: '',
      output: 'Input your number above',
    });
  }

  render() {
    return (
      <div className={ styles['homepage'] }>
        <Headline4>Previous prime number calculator</Headline4>
        <TextField
          className={ styles['input'] }
          onTrailingIconSelect={ this.clearInput }
          trailingIcon={ <MaterialIcon role='button' icon='highlight_off' /> }
        >
          <Input
            value={ this.state.input }
            onKeyPress={ this.handleInputKeyPress }
            onChange={ this.handleInputChange }
            autoFocus={ true }
          />
        </TextField>
        <Button
          className={ styles['calculate-button'] }
          raised={ true }
          unelevated={ true }
          onClick={ this.handleButtonClick }
        >
          Calculate
        </Button>
        <Headline5>{ this.state.output || 'Not found' }</Headline5>
      </div>
    );
  }
}

Homepage.propTypes = {};
