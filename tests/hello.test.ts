import { hello } from '../src/hello';

describe('hello', () => {
  it('returns hello world text', () => {
    expect(hello()).toBe('Hello, world!');
  });
});
