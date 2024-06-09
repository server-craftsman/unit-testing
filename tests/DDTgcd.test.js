import { describe, it, expect, afterAll  } from "vitest";
import { gcd } from '../src/gcd';
// Define the test data for gcd
const gcdTestData = [
    [48, 18, 6],
    [56, 98, 14],
    [101, 103, 1],
    [0, 0, 0], 
    [0, 5, 5], 
    [12, 0, 12],
    [27, 18, 9],
    [100, 25, 25],
    [13, 13, 13],
    [144, 60, 12],
  ];
  
  const gcdInvalidTestData = [
    ['a', 5, 'Inputs must be numbers'],
    [5, 'b', 'Inputs must be numbers'],
    [5.5, 10, 'Inputs must be integers'],
    [10, 5.5, 'Inputs must be integers'],
    [-5, 10, 'Inputs must be non-negative'],
    [10, -5, 'Inputs must be non-negative'],
    [null, 5, 'Inputs must be numbers'],
    [5, undefined, 'Inputs must be numbers'],
    [{}, [], 'Inputs must be numbers'],
  ];
  
  describe('gcd function', () => {
    // Test valid inputs
    const validResults = [];
    it.each(gcdTestData)(
      'should return the gcd of %d and %d as %d',
      (a, b, expected) => {
        try {
          const result = gcd(a, b);
          validResults.push({ a, b, expected, result, passed: result === expected });
          expect(result).toBe(expected);
        } catch (error) {
          validResults.push({ a, b, expected, error: error.message, passed: false });
          expect(true).toBe(false); // Force fail the test
        }
      }
    );
  
    // Test invalid inputs
    const invalidResults = [];
    it.each(gcdInvalidTestData)(
      'should throw an error for invalid input %s and %s',
      (a, b, errorMessage) => {
        try {
          gcd(a, b);
          invalidResults.push({ a, b, errorMessage, passed: false });
          expect(true).toBe(false); // Force fail the test
        } catch (error) {
          invalidResults.push({ a, b, errorMessage, error: error.message, passed: error.message === errorMessage });
          expect(error.message).toBe(errorMessage);
        }
      }
    );
  
    // Log results in table format
    afterAll(() => {
      console.log('Valid Test Results:');
      console.table(validResults);
      console.log('Invalid Test Results:');
      console.table(invalidResults);
    });
  });