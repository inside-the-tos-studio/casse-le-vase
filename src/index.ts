import { consola as importedConsola } from 'consola'
import { findVaseFloorBreaker } from './which-floor';
import { Vase } from './core/vase';

async function exec() {
  importedConsola.box('Vase Floor Breaker tester! 🏢🏺')

  const input = await importedConsola.prompt('How many floors in the building ?', {
    type: 'select',
    options: ['100000', '1000000', '2000000', '10000000']
  })
  const parsedinput = parseInt(input)

  importedConsola.info(`Getting the vases...`)
  const currentVase = new Vase(parsedinput)

  importedConsola.success(`Vase floor limit is ${currentVase.getFloorLimit()}`)
  importedConsola.info(`Launching analysis for: ${input} floors with actual vase...`)

  console.time("Execution time");
  const { floor } = findVaseFloorBreaker(
    parsedinput,
    currentVase
  );
  console.timeEnd("Execution time");
  
  importedConsola.info(`The algorithm says vase broke at floor: ${floor}`)
  
  if (currentVase.getFloorLimit() === floor) {
    importedConsola.success(`🎉🎉🎉 Congratulations! The algorithm is correct! 🎉🎉🎉`)
  } else {
    importedConsola.error(`❌❌❌ The algorithm is incorrect! ❌❌❌`)
  }
}

exec()
