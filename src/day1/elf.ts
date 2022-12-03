export default class Elf {
  constructor(
    readonly calories: number[],
  ) {}

  getTotalCalories() {
    return this.calories.reduce((prevVal, val) => prevVal+val)
  }
}

