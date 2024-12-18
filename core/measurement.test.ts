import { Measurement } from "./measurement";

test("should be an a constructor", () => {
  const measurement = new Measurement();

  expect(measurement).toBeInstanceOf(Measurement);
});
