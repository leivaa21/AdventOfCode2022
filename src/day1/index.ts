import ElfRepository from "./elfRepository";

const repository = new ElfRepository('./input');
const elfs = repository.getTopElfsWithMostCalories(3);

let caloriesSum = 0;

console.log('=== ELF PODIUM ===')
elfs.forEach((elf, index) => {
  const calories = elf.getTotalCalories();
  console.log(`${index + 1}: ${calories}`)
  caloriesSum += calories;
})

console.log('=== TOTAL CALORIES ===');
console.log(`TOTAL: ${caloriesSum}`)