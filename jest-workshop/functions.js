function sumNumbers(num1, num2) {
  return num1 + num2;
}

function reverseArray(array) {
  const newArray = [...array];
  return newArray.reverse();
}

module.exports = { sumNumbers, reverseArray };
