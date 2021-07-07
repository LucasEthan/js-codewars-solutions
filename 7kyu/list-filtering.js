function filter_list(l) {
  let newList = [];

  for (elem of l) {
    if (typeof(elem) == "number") {
      newList.push(elem)
    }
  }
  return newList;
}

console.log(filter_list([0 , -2, 15, 'a', 'b']));

