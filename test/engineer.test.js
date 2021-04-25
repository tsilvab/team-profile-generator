const Engineer = require("../lib/Engineer");

test("Set GitHub with constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("testing", 1, "testing@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("testing", 1, "testing@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("testing", 1, "testing@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});