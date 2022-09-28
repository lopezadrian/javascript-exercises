function sumAll(firstInteger, secondInteger) {
    if (firstInteger < 0 || secondInteger < 0 || typeof firstInteger != "number" || typeof secondInteger != "number") return 'ERROR';
    let upperInteger;
    let lowerInteger;
    if (firstInteger < secondInteger) {
        lowerInteger = firstInteger;
        upperInteger = secondInteger;

    } else {
        lowerInteger = secondInteger;
        upperInteger = firstInteger;
    }
    let sumOfIntegers = 0;
    for (i = lowerInteger; i <= upperInteger; i++) {
        sumOfIntegers += i;
    }
    return sumOfIntegers;
};

// Do not edit below this line
module.exports = sumAll;
