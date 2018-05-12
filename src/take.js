import curry from "./curry";

const take = curry(function*(n, iter) {
  for (const x of iter) {
    if (n <= 0) {
      break;
    }
    yield x;
    n--;
  }
});

module.exports = take;
