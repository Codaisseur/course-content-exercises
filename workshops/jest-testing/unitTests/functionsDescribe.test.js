const { sumNumbers, reverseArray } = require("./functions");

describe("sumNumbers", () => {
  const valueCases = [
    [2, 2, 4],
    [3, 6, 9],
    [1, 1, 2],
    [2, 7, 9]
  ];
  describe.each(valueCases)("when given number values", (a, b, expected) => {
    test("should return the sum of them", () => {
      expect(sumNumbers(a, b)).toEqual(expected);
    });
  });
  describe("when given invalid or wrong type values", () => {
    test("should not return a Number", () => {
      expect(sumNumbers("hi", "you")).not.toBeInstanceOf(Number);
    });
  });
});

describe("reverseArray", () => {
  describe("when given a valid array", () => {
    test("should return a copy of the array but reversed", () => {
      const testArray = [1, 2, 3, 4];
      const reversedArray = reverseArray(testArray);
      expect(reversedArray[0]).toEqual(testArray[testArray.length - 1]);
    });
  });
  describe("when given a parameter that is not an array", () => {
    test("it should fail", () => {
      expect(() => reverseArray(4)).toThrow();
    });
  });
});
