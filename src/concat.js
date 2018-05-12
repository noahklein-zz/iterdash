import curry from "./curry";
const concat = curry(function*(iters) {
  for (const iter of iters) {
    yield* iter;
  }
});

module.exports = concat;
