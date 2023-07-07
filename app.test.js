const addNumbers = require('./app');

test('Adding 2 + 3 should return 5', () => {
  expect(addNumbers(2, 3)).toBe(5);
});
