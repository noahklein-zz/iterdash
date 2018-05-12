const curry = fn => (...args) => {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  let allArgs = args;
  const _waitForArgs = (...args) => {
    allArgs = [...allArgs, ...args];
    return allArgs.length >= fn.length ? fn(...allArgs) : _waitForArgs;
  };
  return _waitForArgs;
};

module.exports = curry;
