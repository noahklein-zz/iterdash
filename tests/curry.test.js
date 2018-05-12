import curry from "../src/curry";

describe("curry", () => {
  it("curries functions", () => {
    const f = curry((a, b, c) => a + b + c);
    const result = f(1, 2, 3);
    expect(result).toBe(6);

    const testableForms = [
      f(1)(2)(3),
      f(1, 2)(3),
      f(1)(2, 3),
      f(1, 2, 3),
      f(1, 2, 3, 4),
      f(1)(2, 3, 4),
      f(1)()(2, 3)
    ];
    for (const test of testableForms) {
      expect(test).toBe(6);
    }
  });
});
