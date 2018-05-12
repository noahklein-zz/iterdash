import take from "../src/take";
import map from "../src/map";

describe("take", () => {
  function* nats() {
    yield 1;
    yield* map(x => x + 1)(nats());
  }

  it("should take the correct number of elements", () => {
    expect([...take(5)(nats())]).toEqual([1, 2, 3, 4, 5]);
    const tooShort = take(5, [1, 2, 3]);
    expect([...tooShort]).toEqual([1, 2, 3]);
  });
});
