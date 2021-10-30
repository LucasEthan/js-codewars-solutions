function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let timesSeen = 1;

  do {
    h *= bounce;
    var ballSeen = h > window;
    if (ballSeen) {
      timesSeen += 2;
    }
  } while (ballSeen);

  return timesSeen;
}


console.log(bouncingBall(100, 0.4, 50));
