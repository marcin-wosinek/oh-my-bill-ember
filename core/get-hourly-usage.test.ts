import { getHourlyUsage } from "./get-hourly-usage";

import { Measurement } from "./measurement";

import { endOfHour, parseISO } from "date-fns";

describe("getHourlyUsage", () => {
  test("should read 0 from empty array, and array of one", () => {
    const startTime = parseISO("2024-12-18T17:00:00");

    expect(getHourlyUsage(startTime, [])).toBe(0);
    expect(getHourlyUsage(startTime, [new Measurement(startTime, 5)])).toBe(0);
  });

  test("should read 0 when there no time overlap", () => {
    const hour = parseISO("2024-12-18T17:00:00");

    expect(
      getHourlyUsage(hour, [
        new Measurement(parseISO("2024-12-18T11:00:00"), 5),
        new Measurement(parseISO("2024-12-18T15:00:00"), 10),
      ])
    ).toBe(0);
  });

  test("should read everything when there all measurement are inside the hour", () => {
    const hour = parseISO("2024-12-18T17:00:00");

    expect(
      getHourlyUsage(hour, [
        new Measurement(parseISO("2024-12-18T17:15:00"), 5),
        new Measurement(parseISO("2024-12-18T17:25:00"), 10),
      ])
    ).toBe(5);
  });

  test("should add proportion of consumption on the first hour of measurements", () => {
    const hour = parseISO("2024-12-18T17:00:00");

    expect(
      getHourlyUsage(hour, [
        new Measurement(parseISO("2024-12-18T17:30:00"), 0),
        new Measurement(parseISO("2024-12-18T19:00:00"), 15),
      ])
    ).toBe(5);
  });

  test.skip("should read value from perfectly spaced data", () => {
    const startTime = parseISO("2024-12-18T17:00:00"),
      endTime = endOfHour(startTime);

    expect(
      getHourlyUsage(startTime, [
        new Measurement(startTime, 5),
        new Measurement(endTime, 6),
      ])
    ).toBe(1);
  });
});
