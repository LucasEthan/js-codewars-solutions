Math.ceil = function (number) {
  return Number.isInteger(number) ? number : parseInt(number) + 1;
};

Math.floor = function (number) {
  return parseInt(number);
};

Math.round = function (number) {
  return number - parseInt(number) >= 0.5
    ? Math.ceil(number)
    : Math.floor(number);
};


console.log(Math.round(10))