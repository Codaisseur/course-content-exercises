function sumNumbers(num1, num2) {
  return num1 + num2;
}

function reverseArray(array) {
  const newArray = [...array];
  return newArray.reverse();
}

// Takes an array of "people" objects which each contain a "country" key and a string representing one of the countries.
function filterByCountry(people, country) {
  return people.filter(person => person.country === country);
}

// Takes an array of people and a country and returns de amount of gold medals that country won.
function goldForCountry(people, country) {
  const representants = people.filter(person => person.country === country);
  return representants.reduce((acc, athlete) => acc + athlete.gold, 0);
}

module.exports = { sumNumbers, reverseArray, filterByCountry, goldForCountry };
