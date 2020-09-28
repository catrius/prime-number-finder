import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from 'reducers/root-reducer';
import { API_URL, ENVIRONMENT, PRODUCTION } from 'utils/constants';


const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    axiosMiddleware(client),
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: ENVIRONMENT !== PRODUCTION,
});

export default store;
