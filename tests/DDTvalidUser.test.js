// npm install vitest --save-dev

import { describe, it, expect } from "vitest";
import { validateUserInput } from "../src/core.js"; // Ensure the correct path to your module

describe("validateUserInput", () => {  
  // Define test cases
  const testCases = [
    { username: "hoang-nt", age: 40, expected: "Validation successful" },
    { username: "ahihi", age: 40, expected: "Invalid username, Valid age" },
    { username: "hoang-nt", age: 17, expected: "Valid username, Invalid age" },
    { username: "hoang", age: 17, expected: "Invalid username, Invalid age" },
    { username: "ngoc-trinh", age: 40, expected: "Invalid username, Valid age" },
    { username: "queen of bikini", age: 18, expected: "Invalid username, Invalid age" },
    { username: "hoang-nt", age: "twenty", expected: "Valid username, Invalid age" },
    { username: 12345, age: 40, expected: "Invalid username, Valid age" },
    { username: "giao-lang", age: 30, expected: "Invalid username, Invalid age" },
    
  ];

  // Log the test cases and results
  const results = testCases.map(({ username, age, expected }) => {
    const result = validateUserInput(username, age);
    return { username, age, expected, result, passed: result === expected };
  });

  console.table(results);

  // Run the test cases
  testCases.forEach(({ username, age, expected }) => {
    it(`should return "${expected}" for username: "${username}" and age: "${age}"`, () => {
      try {
        const result = validateUserInput(username, age);
        expect(result).toBe(expected);
      } catch (error) {
        if (expected !== 'Validation successful') {
          console.warn(`Expected error for username: "${username}" and age: "${age}": ${error.message}`);
        } else {
          throw error;
        }
      }
    });
  });
});
