module.exports = function reverse (n) {
  n = String(n);
  if (n[0] == "-") n = n.slice(1);
  n = n.split("").reverse().join("");
  return Number(n);
}
