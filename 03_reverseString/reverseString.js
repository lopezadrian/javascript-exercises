function reverseString(stringToBeReversed) {
    const chars = stringToBeReversed.split('');
    const reversedChars = chars.reverse();
    const reversedString = reversedChars.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
