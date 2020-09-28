import { combineReducers } from 'redux';

import prime from 'reducers/prime-reducers';
import fetchState from 'reducers/fetch-state-reducers';


const rootReducer = combineReducers({
  prime,
  fetchState,
});

export default rootReducer;
