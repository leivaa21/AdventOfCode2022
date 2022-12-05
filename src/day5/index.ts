import { join } from "path";
import fileToStringArray from "../utils/fileToStringArray";

const data = fileToStringArray(join(__dirname, './input'));


let cargo = new Array<Array<string>>();
const linesOfCharge = new Array<string>();
const instructions = new Array<string>();

data.forEach((dataLine) => {
  //console.log(dataLine);
  if(dataLine==='') return;
  
  if(dataLine.trim().startsWith('[')) {
    linesOfCharge.push(dataLine)
    return;
  };
  if(dataLine.trim().startsWith('1')) {
    const trimmed = dataLine.trim();
    const cargoIds = trimmed.split(' ').filter(val => val !== '')
    //console.log(cargoIds);
    cargoIds.forEach(id =>
      cargo.push(new Array<string>())
    )
    return;
  }
  instructions.push(dataLine);
})

linesOfCharge.forEach(chargeLine => {
  const stackSize = 3;
  cargo.forEach((stack, index) => {
    const startOfStack = index*stackSize + index; // 0 would be 0, 1 would be 4 and 2 would be 8
    const load = chargeLine.slice(startOfStack, startOfStack + stackSize)
    if(load === '   ') return;
    stack.push(load[1]);
  })
})

// Right now on cargo we got a array of arrays, with every array having the letters on it
// IE: [ ['A'], ['B', 'C'], ['D'] ] 
// 
//     [B]
// [A] [C] [D]
//  1   2   3

// And instructions is an array of the instructions we have to perform

//console.log(cargo);
//console.log(instructions);


for(let instruction of instructions ) {
  const data = instruction.split(' ').filter(data => data !== 'move' && data !== 'from' && data !== 'to');
  const count = parseInt(data[0]);
  const from = parseInt(data[1]);
  const dest = parseInt(data[2]);

  //console.log(`moving ${count} from ${from} to ${dest}`);

  const movingLoad = new Array<string>(count);
  movingLoad.fill('-');
  movingLoad.forEach((load, index) => {
    if(cargo[from - 1].length === 0) throw new Error('wtf');
    movingLoad[index] = cargo[from - 1].shift() as string;
  })
  
  //THIS LINE FOR PART 1
  //cargo[dest-1] = movingLoad.reverse().concat(...cargo[dest-1]);
  
  //THIS LINE FOR PART 2
  cargo[dest-1] = movingLoad.concat(...cargo[dest-1]);
  
}

let response = ''

cargo.map(stacks => {
  response = response.concat(stacks[0]);
})

console.log(response);