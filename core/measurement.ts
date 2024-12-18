/**
 * Stores energy meter measurement, registered by the user.
 */
export class Measurment {
  /**
   * Point in time when the energy measurement was taken.
   */
  public datetime: Date;

  /**
   * Value shown on the meter.
   */
  public value: number;
}
