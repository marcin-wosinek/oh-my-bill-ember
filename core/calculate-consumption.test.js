import { calculateConsumption } from "./calculate-consumption";

describe("calculateConsumption", () => {
  test("should return empty array", () => {
    expect(calculateConsumption()).toHaveLength(0);
  });
});
