import { Tariff } from "./tariff";

test("should be an a constructor", () => {
  const tariff = new Tariff();

  expect(tariff).toBeInstanceOf(Tariff);
});
