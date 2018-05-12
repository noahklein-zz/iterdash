import curry from "./curry";
import take from "./take";

const head = curry(iter => take(1, iter)[0]);

module.exports = head;
