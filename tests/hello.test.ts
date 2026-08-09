import { helloWorld } from '../src/hello';

describe('helloWorld', () => {
  test('returns Hello, world! when no name is provided', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });

  test('returns Hello, Name! when a name is provided', () => {
    expect(helloWorld('Alice')).toBe('Hello, Alice!');
  });
});
