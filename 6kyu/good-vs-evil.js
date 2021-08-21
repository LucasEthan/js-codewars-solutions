function goodVsEvil(good, evil) {
  const calculateWorth = (army, isGood) => {
    const unitValuesGood = [1, 2, 3, 3, 4, 10];
    const unitValuesEvil = [1, 2, 2, 2, 3, 5, 10];
    return army
      .split(" ")
      .map((el) => parseInt(el))
      .reduce(
        (result, value, index) =>
          result +
          (value * (isGood ? unitValuesGood[index] : unitValuesEvil[index]))
      );
  };

  const goodTotalWorth = calculateWorth(good, true);
  const evilTotalWorth = calculateWorth(evil, false);

  if (goodTotalWorth > evilTotalWorth) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodTotalWorth < evilTotalWorth) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
