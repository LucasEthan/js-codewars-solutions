function getOrder(input) {
  const menu = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
  let order = ""
  let orders = []
  for (char of input) {
    order += char
    if (menu.includes(order)) {
      orders.push(order)
      order = ""
    }
  }
  return orders.sort((a, b) => menu.indexOf(a) - menu.indexOf(b)).map((order) => order[0].toUpperCase() + order.slice(1)).join(" ")
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))