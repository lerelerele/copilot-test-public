import { helloWorld } from '../src/hello';

describe('helloWorld', () => {
  it('returns the hello world greeting', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });
});
