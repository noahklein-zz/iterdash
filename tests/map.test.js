import map from "../src/map";

describe("map", () => {
  const iters = [
    [1, 2, 3],
    (function*() {
      yield 1;
      yield 2;
      yield 3;
    })(),
    new Set([1, 2, 3])
  ];

  it("should map a function over an iterable", () => {
    const answer = [1, 4, 9];
    for (const iter of iters) {
      const mapped = map(x => x ** 2)(iter);
      expect([...mapped]).toEqual(answer);
    }
  });
});
