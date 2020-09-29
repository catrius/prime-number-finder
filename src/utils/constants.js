// Environments
export const ENVIRONMENT = process.env.NODE_ENV;
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

// API URLs
export const API_URL = ENVIRONMENT === PRODUCTION ?
  'https://api-previous-prime-number.catri.us/' : 'http://localhost:8000';
export const PRIME_API_URL = '/prime/';

// Fetch states
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

// Fetch actions
export const FETCH_PRIME = 'FETCH_PRIME';
