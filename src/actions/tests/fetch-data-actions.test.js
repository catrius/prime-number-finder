import { fetchPrime } from 'actions/fetch-data-actions';
import { FETCH_PRIME, PRIME_API_URL } from 'utils/constants';


describe('fetchPrime', () => {
  it('should return FETCH_PRIME action', () => {
    expect(fetchPrime(10)).toEqual({
      type: FETCH_PRIME,
      payload: {
        request: {
          method: 'get',
          url: `${ PRIME_API_URL }?n=${ 10 }`,
          params: {},
        },
      },
    });
  });
});
