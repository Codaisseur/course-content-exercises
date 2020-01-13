const { sumNumbers, reverseArray } = require("./functions");

test("if sumNumbers is given int values it will return the sum of them", () => {
  expect(sumNumbers(4, 3)).toEqual(7);
});

test("if sumNumbers is given invalid values it will return an invalid value", () => {
  expect(sumNumbers("hi", "you")).not.toBeInstanceOf(Number);
});

test("if reverseArray is given a valid array it should return a copy of the array but reversed", () => {
  const testArray = [1, 2, 3, 4];
  const reversedArray = reverseArray(testArray);
  expect(reversedArray[0]).toEqual(testArray[testArray.length - 1]);
});

test("if reverseArray is passed something which is not an array it should fail", () => {
  expect(() => reverseArray(4)).toThrow(); // Wrap call in function if not errors are not catched
});
