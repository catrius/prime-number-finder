import { failingly, successfully } from 'utils/axios-suffixes';
import { FAIL, FETCH_PRIME, REQUEST, SUCCESS } from 'utils/constants';
import fetchState from 'reducers/fetch-state-reducers';


describe('fetchState', () => {
  it('should handle FETCH_PRIME', () => {
    expect(fetchState({}, { type: FETCH_PRIME })).toEqual(REQUEST);
  });

  it('should handle successfully(FETCH_PRIME)', () => {
    expect(fetchState({}, { type: successfully(FETCH_PRIME) })).toEqual(SUCCESS);
  });

  it('should handle failingly(FETCH_PRIME)', () => {
    expect(fetchState({}, { type: failingly(FETCH_PRIME) })).toEqual(FAIL);
  });
});
