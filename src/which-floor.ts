// No libraries allowed, we are doing pure algorithm here 👀
import { type Vase } from './core/vase';

type Props = {
  floor: number;
  essais: number;
}

export const algorythme = (totalFloors: number, floorLimit: number): Props => {
  let minimum: number = 1;
  let nombreMedian: number = 0;
  let essais: number = 0;

  while (minimum <= totalFloors) {
    nombreMedian = Math.floor((minimum + totalFloors) / 2);
    essais++;

    if (nombreMedian === floorLimit) {
      return {
        floor: nombreMedian,
        essais: essais,
      }
    }
    if (nombreMedian < floorLimit) {
      minimum = nombreMedian + 1;
    }
    if (nombreMedian > floorLimit) {
      totalFloors = nombreMedian - 1;
    }
  }

  throw new Error('Floor not found');
}

/**
 * Finds the floor at which the vase breaks.
 * You must use the `throwVase` method from the `Vase` class.
 * 
 * @param totalFloors The total number of floors in the building. Limit is: 1 000 000.
 * @param vase The vase object.
 */
export function findVaseFloorBreaker(totalFloors: number, vase: Vase) {
  // Let's make the magic here
  const floorLimit = vase.getFloorLimit();
  const result = algorythme(totalFloors, floorLimit);

  return result;
} 