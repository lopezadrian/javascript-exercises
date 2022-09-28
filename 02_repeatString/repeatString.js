function repeatString(stringToBeRepeated, numberOfTimesRepeated) {
    if (numberOfTimesRepeated < 0) return "ERROR";
    const repeatedStringArray = [];
    for (i = 0; i < numberOfTimesRepeated; i++) {
        repeatedStringArray[i] = stringToBeRepeated;
    }
    let repeatedString = repeatedStringArray.join('');
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
