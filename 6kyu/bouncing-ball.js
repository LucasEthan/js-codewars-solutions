function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let timesSeen = 1;

  while (true) {
    h *= bounce;
    if (h > window) {
      timesSeen += 2;
    } else {
      break;
    }
  }
  return timesSeen;
}

console.log(bouncingBall(100, 15, 1.5));
