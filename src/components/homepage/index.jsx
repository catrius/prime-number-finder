import React, { Component } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Headline5 } from '@material/react-typography';

import { calculatePreviousPrimeNumber } from 'utils/math';
import styles from './homepage.module.sass';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: 'Input your number above',
    };

    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState({
        output: calculatePreviousPrimeNumber(this.state.input),
        init: false,
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      input: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className={ styles['homepage'] }>
        <Headline4>Previous prime number calculator</Headline4>
        <TextField className={ styles['input'] }>
          <Input
            value={ this.state.input }
            onKeyPress={ this.handleInputKeyPress }
            onChange={ this.handleInputChange }
          />
        </TextField>
        <Headline5>{ this.state.output || 'Not found' }</Headline5>
      </div>
    );
  }
}

Homepage.propTypes = {};
