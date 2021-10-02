function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 1, j = 1; i <= nFloors; i++, j += 2) {
    const padding = " ".repeat(nFloors - i);
    tower.push(padding + "*".repeat(j) + padding);
  }
  return tower;
}

console.log(towerBuilder(6));
