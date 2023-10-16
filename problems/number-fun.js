function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n === "number") {
    if (n < 1 || n > 10000) {
      throw new RangeError;
    }
    return 1/n;
  }  else {
    throw new TypeError;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
