import { getFetchState } from 'selectors/fetch-state-selectors';


describe('getFetchState', () => {
  it('should return fetch state', () => {
    const fetchState = getFetchState({
      fetchState: 'SUCCESS',
    });

    expect(fetchState).toEqual('SUCCESS');
  });
});
