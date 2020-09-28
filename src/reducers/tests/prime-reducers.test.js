import { successfully } from 'utils/axios-suffixes';
import { FETCH_PRIME } from 'utils/constants';
import prime from 'reducers/prime-reducers';


describe('posts', () => {
  it('should handle successfully(FETCH_POST)', () => {
    const action = {
      type: successfully(FETCH_PRIME),
      payload: {
        data: '7',
      },
    };
    expect(prime({}, action)).toEqual('7');
  });
});
