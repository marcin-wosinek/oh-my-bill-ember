import { Consumption } from "./consumption";

test("should be an a constructor", () => {
  const consumption = new Consumption();

  expect(consumption).toBeInstanceOf(Consumption);
});
