// Environments
export const ENVIRONMENT = process.env.NODE_ENV;
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

// Website meta
export const WEB_NAME = 'Catrius';
export const WEB_DESCRIPTION = 'A blog by Thang Pham, where I can freely express myself.';

// API URLs
export const API_URL = ENVIRONMENT === PRODUCTION ?
  'http://api.previous-prime-number.catri.us/' : 'http://localhost:8000';
export const PRIME_API_URL = '/prime/';

// Fetch states
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

// Fetch actions
export const FETCH_PRIME = 'FETCH_PRIME';
