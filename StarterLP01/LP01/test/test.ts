import { test, expect } from "@jest/globals";

import {
  isEven,
  add,
  divide,
  palindrome,
  countVowels,
  findMax,
  removeDuplicates,
} from "../src/functions";

// Write a test for `isEven` that checks whether an even number returns `true`
test("isEven num even", () => {
  expect(isEven(10)).toBe(true);
});

// Write a test for `isEven` that checks whether an odd number returns `false`
test("isEven num odd", () => {
  expect(isEven(11)).toBe(false);
});

// Write a test for `palindrome` using a palindrome
test("palindrome is palindrome", () => {
  expect(palindrome("tacocat")).toBe(true);
});
// Write a test for `palindrome` using a word that is not a palindrome
test("palindrome is not palindrome", () => {
  expect(palindrome("cat")).toBe(false);
});

// Write a test that correctly identifies the number of vowels in a word containing vowels
test("countVowels has vowels", () => {
  expect(countVowels("hello world")).toBe(3);
});

// Write a test that correctly identifies `0` vowels in a word without vowels
test("countVowels has no vowels", () => {
  expect(countVowels("myths")).toBe(0);
});

// Break one of your tests so it fails
test("countVowels has vowels", () => {
  expect(countVowels("hello world")).toBe(300);
});