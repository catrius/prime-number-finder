import rootReducer from 'reducers/root-reducer';


describe('rootReducer', () => {
  it('should have initial state', () => {
    const action = {
      type: '@INIT',
    };

    expect(rootReducer({}, action)).toEqual({
      prime: null,
      fetchState: null,
    });
  });
});
