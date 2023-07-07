const addNumbers = require('./app');

test('Adding 2 + 3 should return 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});
