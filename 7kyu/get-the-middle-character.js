function getMiddle(s)
{
  let position = 0;
  let length = 0;

  if (s.length % 2 == 1) {
      position = s.length / 2;
      length = 1;
  } else {
      position = s.length / 2 - 1;
      length = 2;
  }

  return s.substring(position, position + length)
}

console.log(getMiddle("middle"));