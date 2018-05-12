import curry from "./curry";

const filter = curry(function*(f, iter) {
  for (const x of iter) {
    if (f(x)) yield x;
  }
});
