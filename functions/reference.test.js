const { expect } = require('@jest/globals');
const { copyArr, createUser, includesValue } = require('./reference');

it('should return new user Bob', () => {
  // reference type matcher is to Equal
  expect(createUser()).toEqual({ name: 'Bob', email: 'bob@bob.com' });
});

it('should return copy of array', () => {
  expect(copyArr([1, 2, 4])).toEqual([1, 2, 4]);
});

it('should contain value', () => {
  const arr = [1, 4, 8];
  val = 4;
  expect(arr).toContain(val);
  expect(includesValue(arr, val)).toBeTruthy;
});
