const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const array = lowerCaseString.split("");
    const lettersOnly = array.filter(character => /[a-z]/.test(character));
    const iterate = Math.trunc(array.length / 2);
    let mirrorChar = lettersOnly.length - 1;
    for (i = 0; i < iterate; i++) {
        if (lettersOnly[i] === lettersOnly[mirrorChar]) {
            mirrorChar -= 1;
        }
        else return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
