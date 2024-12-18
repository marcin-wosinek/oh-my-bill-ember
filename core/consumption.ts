/**
 * Stores consumption data ready to be displayed to the user.
 */
export class Consumption {
  /**
   * Reference point of the consumption data.
   */
  public datetime: Date;

  /**
   * Cost of the consumption.
   */
  public cost: number;
}
