const fibonacci = function(number) {
    const nthNumber = parseInt(number);
    if (nthNumber < 0) return "OOPS";
    let currentNumber = 1;
    let previousNumber = 1;
    let nextNumber;
    for (i = 0; i < nthNumber - 2; i++) {
        nextNumber = currentNumber + previousNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
