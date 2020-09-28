import { createReducer } from '@reduxjs/toolkit';

import { failingly, successfully } from 'utils/axios-suffixes';
import { FAIL, FETCH_PRIME, REQUEST, SUCCESS } from 'utils/constants';


const prime = createReducer(null, {
  [FETCH_PRIME]: (state, action) => REQUEST,
  [successfully(FETCH_PRIME)]: (state, action) => SUCCESS,
  [failingly(FETCH_PRIME)]: (state, action) => FAIL,
});


export default prime;
