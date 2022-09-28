function leapYears(year) {
    let isLeapYear;
    const isCentury = Boolean(year % 100 === 0);
    const isLeapCentury = Boolean(year % 400 === 0);
    const is4thYear = Boolean(year % 4 === 0);

    if (!isLeapCentury && !is4thYear) isLeapYear = false;

    if (isCentury && !isLeapCentury) {
        isLeapYear = false;
    } else if (is4thYear || isLeapCentury) {
        isLeapYear = true;
    }
    
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
