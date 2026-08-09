import { helloWorld } from '../src/hello';

describe('helloWorld', () => {
  it('returns a hello world greeting', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });
});
