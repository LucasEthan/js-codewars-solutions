function filter_list(l) {
  return l.filter(elem => typeof(elem) == "number");
}

console.log(filter_list([0 , -2, 15, 'a', 'b']));

