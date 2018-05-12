import curry from "./curry";
import head from "./head";

const reduce = curry((f, iter, initialValue = null) => {
  let acc = initialValue !== undefined ? initialValue : head(iter);
  for (const x of iter) {
    acc = f(acc, x);
  }
  return acc;
});

module.exports = reduce;
