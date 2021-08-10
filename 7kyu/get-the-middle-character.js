function getMiddle(s)
{
  const position = Math.ceil(s.length / 2 - 1);
  const length = s.length % 2 == 1 ? 1 : 2

  return s.substr(position, length)
}

console.log(getMiddle("middle"));