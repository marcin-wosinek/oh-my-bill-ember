import { min, max, startOfHour, endOfHour } from "date-fns";
import { find } from "lodash";

/**
 * Method that returns quantity used at the given hour.
 */
export function getHourlyUsage(
  hour: Date,
  measurements: Measurement[]
): number {
  if (measurements && measurements.length > 1) {
    const measurementTimes = measurements.map(
        (measurement) => measurement.datetime
      ),
      hourStart = startOfHour(hour),
      hourEnd = endOfHour(hour);

    const startMeasurementTime = min(measurementTimes),
      endMeasurementTime = max(measurementTimes);

    // No overlap between the hour, and measurements
    if (hourEnd < startMeasurementTime || hourStart > endMeasurementTime) {
      return 0;
    }

    // All measurements inside the hour
    if (hourStart < startMeasurementTime && endMeasurementTime < hourEnd) {
      const startMeasurement = find(measurements, {
          datetime: startMeasurementTime,
        }),
        endMeasurement = find(measurements, { datetime: endMeasurementTime });

      return endMeasurement.value - startMeasurement.value;
    }

    // Start hour of measurements
    if (hourStart < startMeasurementTime) {
    }

    // End hour of measurements

    // Middle hour of measurements

    // One measurements within the hour

    // Multiple measurements within the hour
  }

  return 0;
}
