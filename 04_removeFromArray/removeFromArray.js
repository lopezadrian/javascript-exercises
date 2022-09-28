function removeFromArray(originalArray, ...elementsToRemove) {
    const removedElementsArray = originalArray.slice();
    const numberOfArguments = arguments.length;
    for (const element of elementsToRemove) {
        const elementIndex = removedElementsArray.indexOf(element);
        if (elementIndex != -1) {
            removedElementsArray.splice(elementIndex, 1);
        } else continue;
    }
    return removedElementsArray;

};

// Do not edit below this line
module.exports = removeFromArray;
