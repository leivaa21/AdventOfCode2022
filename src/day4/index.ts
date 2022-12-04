import { join } from "path";
import JobAssignment from "./JobAssignment";
import JobPairRepository from "./JobPairRepository";

const path = join(__dirname, './input');

const repository = new JobPairRepository(path);

let counter = 0;

repository.pairs.forEach(pair => {
  if(pair.theyFullyOverlap()) counter++;
})

console.log(`They fully contain in ${counter} pairs`);

counter = 0;

repository.pairs.forEach(pair => {
  if(pair.haveSomeOverlapping()) counter++;
})

console.log(`They have some overlapping in ${counter} pairs`);
