import concat from "../src/concat";

describe("concat", () => {
  it("should concat iterables", () => {
    const concatted = concat([[1, 2, 3], "abc", new Set([4, 5, 6])]);
    expect([...concatted]).toEqual([1, 2, 3, "a", "b", "c", 4, 5, 6]);
  });
});
