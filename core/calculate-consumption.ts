import { addHours, compareAsc, differenceInHours, startOfHour } from "date-fns";
import { range } from "lodash";

import { Consumption } from "./consumption";
import { Measurement } from "./measurement";
import { Tariff } from "./tariff";

/**
 * Method that calculates hourly consumption for a given measurements.
 */
export function calculateConsumption(
  tariff: Tariff,
  measurements: Measurement[]
): Consumption[] {
  if (measurements && measurements.length > 1) {
    const orderedMeasurments = measurements.sort((a, b) =>
        compareAsc(a.datetime, b.datetime)
      ),
      hourlyFixedCharge = tariff.fixedCharge / 24;

    const firstHour = startOfHour(orderedMeasurments[0].datetime),
      lastHour = startOfHour(orderedMeasurments.at(-1).datetime);

    const consumptionArraySize = differenceInHours(lastHour, firstHour) + 1;

    const t = range(0, consumptionArraySize).map((n) => {
      return new Consumption(addHours(firstHour, n), hourlyFixedCharge);
    });

    return t;
  }

  return [];
}
