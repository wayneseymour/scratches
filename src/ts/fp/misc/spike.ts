import * as T from "fp-ts/lib/Task";
import { pipe } from 'fp-ts/lib/Function';

const fetchPopulation = (x) => new Promise((resolve) => resolve({ population: 'many?'}));
const addPopulation = (animal: any) => pipe(
  fetchPopulation(animal.name),
  T.map(population => { ...animal, population })
);
addPopulation({ name: 'traniaml', type: 'strong'});
