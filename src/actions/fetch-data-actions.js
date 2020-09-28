import { get } from 'actions/axios-requests-actions';
import {
  FETCH_PRIME,
  PRIME_API_URL,
} from 'utils/constants';


export const fetchPrime = n => get(FETCH_PRIME, `${ PRIME_API_URL }?n=${ n }`);
