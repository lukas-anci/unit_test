function add(num1, num2) {
  const sum = num1 + num2;
  //   return 15;
  return sum;
}
console.log(add(5, 10));

function divide(n1, n2) {
  if (n2 === 0) return null;
  return n1 / n2;
}

module.exports = {
  add,
  divide,
};
