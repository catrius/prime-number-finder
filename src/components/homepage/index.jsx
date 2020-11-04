import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Headline5 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import styles from './homepage.module.sass';

import { fetchPrime } from 'actions/fetch-data-actions';
import { FAIL, REQUEST } from 'utils/constants';


export default function Homepage() {
  const dispatch = useDispatch();
  const [init, setInit] = useState(true);
  const [input, setInput] = useState('');
  const prime = useSelector(state => state.prime);
  const fetchState = useSelector(state => state.fetchState);

  const handleInputKeyPress = e => e.key === 'Enter' && calculate();
  const handleInputChange = e => setInput(e.currentTarget.value);

  const calculate = () => {
    init && setInit(false);
    dispatch(fetchPrime(input));
  };

  const clearInput = () => {
    setInit(true);
    setInput('');
  };

  const result = () => {
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
  };

  return (
    <div className={ styles['homepage'] }>
      <Headline4>Previous prime number calculator</Headline4>
      <TextField
        className={ styles['input'] }
        onTrailingIconSelect={ clearInput }
        trailingIcon={ <MaterialIcon role='button' icon='highlight_off'/> }
      >
        <Input
          value={ input }
          onKeyPress={ handleInputKeyPress }
          onChange={ handleInputChange }
          autoFocus={ true }
        />
      </TextField>
      <Button
        className={ styles['calculate-button'] }
        raised={ true }
        unelevated={ true }
        onClick={ calculate }
      >
        Calculate
      </Button>
      <Headline5>{ result() }</Headline5>
    </div>
  );
}
