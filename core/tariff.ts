/**
 * Store energy tariff information, to be use in calalculations.
 */
export class Tariff {
  /**
   * Fixed part of the energy bill—line maintainece, contracted power, etc.
   */
  public fixedCharge: number;

  /**
   * Price per unit of energy consume (usualy kWh).
   */
  public unitCharge: number;
}
