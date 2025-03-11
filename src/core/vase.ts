export class Vase {
  private floorLimit: number;

  constructor(private maxNumber: number) {
    this.floorLimit = this.generateRandomNumber();
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * this.maxNumber) + 1;
  }

  /**
   * Indicates if the vase is broken or not when thrown.
   * 
   * @param floor The floor at which the vase is thrown.
   */
  throwVase(floor: number): {isBroken: boolean} {
    return { isBroken: floor < this.floorLimit };
  }

  /**
   * DO NOT USE in your algorithm. This is only for exercice purposes.
   * 
   * @returns The floor limit of the vase.
   */
  getFloorLimit() {
    return this.floorLimit;
  }
}
