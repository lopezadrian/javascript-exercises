const add = function(a, b) {
  const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	const difference = a - b;
  return difference;
};

const sum = function(array) {
	const valueOfArraySum = array.reduce(
    (total, currentNumber) => total + currentNumber,
    0
    );
    return valueOfArraySum;
};

const multiply = function(array) {
  const productOfArrayElements = array.reduce(
    (runningProduct, currentNumber) => runningProduct * currentNumber,
    1
  );
  return productOfArrayElements;
};

const power = function(base, exponent) {
	const value = base ** exponent;
  return value;
};

const factorial = function(number) {
	let finalValue = number;
  if (number == 0) finalValue = 1;
  else if (number == 1) finalValue = 1;
  else {
    while (number > 1) {
      number -= 1;
      finalValue = finalValue * number;
    }
  }
  return finalValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
