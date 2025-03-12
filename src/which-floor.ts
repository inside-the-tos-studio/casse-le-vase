// No libraries allowed, we are doing pure algorithm here 👀
import { type Vase } from './core/vase';

type Props = {
  floor: number;
  essais: number;
}

export const algorythme = (totalFloors: number, vase: Vase): Props => {
  let floor = 1;
  let maximumFloors = totalFloors;
  let essais = 0;

  while (floor < maximumFloors) {
    const nombreMedian = Math.floor((floor + maximumFloors) / 2);

    if (vase.throwVase(nombreMedian).isBroken) {
      floor = nombreMedian + 1;
      essais++
    } else {
      maximumFloors = nombreMedian;
      essais++
    }
  }

  return { floor, essais };
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
  const result = algorythme(totalFloors, vase);

  return result;
} 