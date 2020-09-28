import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/axios-suffixes';
import { FETCH_PRIME } from 'utils/constants';


const posts = createReducer(null, {
  [successfully(FETCH_PRIME)]: (state, action) => action.payload.data,
});

export default posts;
