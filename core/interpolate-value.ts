import { Measurement } from "./measurement";

import { isDate, differenceInMinutes } from "date-fns";

/**
 * Method that takes two measurements, and interpolate the value at another
 * time.
 */
export function interpolateValue(
  time: Date,
  startMeasurement: Measurement,
  endMeasurement: Measurement
): number {
  if (!isDate(time) || (!startMeasurement && !endMeasurement)) {
    return 0;
  }

  if (!startMeasurement) {
    return endMeasurement.value;
  }

  if (!endMeasurement) {
    return startMeasurement.value;
  }

  const valueDifference = endMeasurement.value - startMeasurement.value,
    measurementTimeDifference =
      endMeasurement.datetime - startMeasurement.datetime,
    timeDifference = time - startMeasurement.datetime;

  return (
    (valueDifference * timeDifference) / measurementTimeDifference +
    startMeasurement.value
  );
}
