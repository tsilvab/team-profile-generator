const Intern = require('../lib/Intern');

test('Set school with constructor', () => {
  const testValue = 'university';
  const e = new Intern('testing', 1, 'testing@gmail.com', testValue);
  expect(e.school).toBe(testValue);
});

test('Role should return "Intern"', () => {
  const testValue = 'Intern';
  const e = new Intern('testing', 1, 'testing@gmail.com', 'university');
  expect(e.role).toBe(testValue);
});
