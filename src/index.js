module.exports = function reverse (n) {
  n = String(n);
  n = n.split("").reverse().join("");
  return Number(n);
}
