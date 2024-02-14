const { RuleTester } = require("eslint");
const rule = require("../rules/max-optional-args");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run("max-optional-args", rule, {
  valid: [
    {
      code: "function myFunction(a, b, c, optional = { d: 1, e: 2, f: 3, g: 4, h: 5 }) {}",
    },
  ],
  invalid: [
    {
      code: "function myFunction(a, b, c, d = 1, e = 2, f = 3, g = 4, h = 5) {}",
      output: "function myFunction(a, b, c, d = 1, e = 2, f = 3, g = 4, h = 5) {}",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");