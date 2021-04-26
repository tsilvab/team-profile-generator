const Manager = require('../lib/Manager');

test('Created office number with constructor', () => {
  const testValue = 100;
  const e = new Manager('testing', 1, 'testing@gmail.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test(' Role should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('testing', 1, 'testing@gmail.com', 100);
  expect(e.role).toBe(testValue);
});
