const curry = require("./curry");

const map = curry(function*(f, iter) {
  for (const x of iter) {
    yield f(x);
  }
});

module.exports = map;
