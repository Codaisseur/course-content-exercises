const { filterByCountry, goldForCountry } = require("./functions");

const people = [
  { name: "Micheal Phelps", country: "USA", gold: 8 },
  { name: "Usain Bolt", country: "Jamaica", gold: 5 },
  { name: "Simone Biles", country: "USA", gold: 3 },
  { name: "Lance Armstrong", country: "USA", gold: 0 },
  { name: "Lionel Messi", country: "Argentina", gold: 2 },
  { name: "Sergio Aguero", country: "Argentina", gold: 1 },
  { name: "Valentino Rossi", country: "Italy", gold: 6 }
];

describe("filterByCountry", () => {
  const cases = [
    ["USA", 3],
    ["Jamaica", 1],
    ["Argentina", 2],
    ["Russia", 0]
  ];
  describe.each(cases)(
    "when given an array of people and a country",
    (country, expectedLength) => {
      test("should return an array with the people belonging to that country", () => {
        const filteredArray = filterByCountry(people, country);
        expect(filteredArray).toHaveLength(expectedLength);
      });
    }
  );
  describe("when the first parameter isn't an array", () => {
    test("it should throw an error", () => {
      expect(() => filterByCountry("notAnArray", "USA")).toThrow();
    });
  });
  describe("when the second parameter isn't a string", () => {
    test("it should return an empty array", () => {
      expect(filterByCountry(people, 4)).toHaveLength(0);
    });
  });
});

describe("goldForCountry", () => {
  const cases = [
    ["USA", 11],
    ["Jamaica", 5],
    ["Argentina", 3],
    ["Russia", 0]
  ];
  describe.each(cases)(
    "when given an array of athletes and a country",
    (country, expectedGold) => {
      test("should return the amount of gold medals for that country", () => {
        expect(goldForCountry(people, country)).toEqual(expectedGold);
      });
    }
  );
  describe("when the second parameter isn't a country string", () => {
    test("it should return 0", () => {
      expect(goldForCountry(people, 4)).toEqual(0);
    });
  });
  describe("when the first parameter isn't an array", () => {
    test("should raise an exception", () => {
      expect(() => goldForCountry(4, "USA")).toThrow();
    });
  });
});
