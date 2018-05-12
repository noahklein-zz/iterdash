import curry from "./curry";
import head from "./head";

const reduce = curry((f, iter, initialValue) => {
  let acc = initialValue !== undefined ? initialValue : head(iter);
  for (const x of iter) {
    acc = f(acc, x);
  }
  return acc;
});
