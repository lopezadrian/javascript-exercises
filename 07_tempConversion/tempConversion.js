function ftoc(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5/9);
  tempInCelsius = Math.round(tempInCelsius * 10) / 10;
  return tempInCelsius;
};

function ctof(tempInCelsius) {
  let tempInFahrenheit = tempInCelsius * (9/5) + 32;
  tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
