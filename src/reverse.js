import curry from "./curry";

const reverse = curry(iter => {
  const arr = [...iter];
  arr.reverse();
  for (const x of arr) {
    yield x;
  }
})

module.exports = reverse;
