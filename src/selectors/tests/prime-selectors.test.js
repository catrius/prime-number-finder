import { getPrime } from 'selectors/prime-selectors';


describe('getPosts', () => {
  it('should return posts', () => {
    const state = {
      prime: 7,
    };

    expect(getPrime(state)).toEqual(7);
  });
});
