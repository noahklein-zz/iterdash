import reduce from "../src/reduce";

describe("reduce", () => {
  it("should fold a function over an iterable", () => {
    const reduced = reduce((acc, next) => acc + next)([1, 2, 3, 4]);
    expect(reduced).toBe(1 + 2 + 3 + 4);
  });
});
