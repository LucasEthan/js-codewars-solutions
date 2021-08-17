function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  const RATE_INCREASE = 0.005;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let savings = 0;
  let months = 0;
  let rateLoss = percentLossByMonth / 100;

  while (savings + priceOld < priceNew) {
    months++;
    if (months % 2 == 0) {
      rateLoss += RATE_INCREASE;
    }
    savings += savingperMonth;
    priceOld = priceOld * (1 - rateLoss);
    priceNew = priceNew * (1 - rateLoss);
  }
  return [months, Math.round(savings + priceOld - priceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));