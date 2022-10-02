function calculateAge(birthYear, deathYear) {
    let age;
    if (!deathYear) {
        let currentYear = new Date();
        currentYear = currentYear.getFullYear();
        age = currentYear - birthYear;
        return age;
    }
    age = deathYear - birthYear;
    return age;
}

const findTheOldest = function(array) {
    const oldestFound = array.reduce((oldestPerson, currentPerson) => {
        const oldestAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    })
    return oldestFound;
};

// Do not edit below this line
module.exports = findTheOldest;
           