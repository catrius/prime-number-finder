import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Headline5 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import { func, number, string } from 'prop-types';
import { noop } from 'lodash';

import styles from './homepage.module.sass';

import { getPrime } from 'selectors/prime-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';
import { fetchPrime as _fetchPrime } from 'actions/fetch-data-actions';
import { FAIL, REQUEST, SUCCESS } from 'utils/constants';


export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: true,
      input: '',
    };

    this.calculate = this.calculate.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.result = this.result.bind(this);
  }

  calculate() {
    const { fetchPrime } = this.props;
    if (this.state.init) {
      this.setState({
        init: false,
      });
    }
    fetchPrime(this.state.input);
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
      init: true,
      input: '',
    });
  }

  result() {
    const { prime, fetchState } = this.props;
    const { init } = this.state;

    if (init) {
      return 'Input your number above';
    }

    if (fetchState === FAIL) {
      return 'Something wrong happened';
    }

    if (fetchState === REQUEST) {
      return 'Calculating...';
    }

    return prime;
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
        <Headline5>{ this.result() }</Headline5>
      </div>
    );
  }
}

Homepage.propTypes = {
  prime: number,
  fetchPrime: func,
  fetchState: string,
};

Homepage.defaultProps = {
  prime: null,
  fetchPrime: noop,
  fetchState: SUCCESS,
};

const mapStateToProps = (state, ownProps) => ({
  prime: getPrime(state),
  fetchState: getFetchState(state, ownProps),
});

const mapDispatchToProps = {
  fetchPrime: _fetchPrime,
};

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomepageContainer;
