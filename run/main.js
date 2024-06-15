// main.js
import { validateUserInput } from '../src/core.js';

function runValidation() {
  const testCases = [
    { username: 'hoang-nt', age: 40 },
    { username: 'ahihi', age: 40 },
    { username: 'hoang-nt', age: 17 },
    { username: 'queen of bikini', age: 18 },
    { username: 'ngoc-trinh', age: 40 },
    { username: 'hoang', age: 40 },
    { username: 'hoang-nt', age: 'twenty' },
    { username: 12345, age: 40 },
    { username: 'giao-lang', age: 30 },
  ];

  console.log("Validation Results");
  console.log("==================\n");

  testCases.forEach(({ username, age }, index) => {
    const result = validateUserInput(username, age);
    console.log(`Test Case #${index + 1}`);
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Result: ${result}\n`);
  });

  console.log("Summary Table");
  console.log("=============\n");
  console.table(testCases.map(({ username, age }) => {
    return { Username: username, Age: age, Result: validateUserInput(username, age) };
  }));
}

runValidation();
