import Elf from "./elf"

it('should return summed calories', () => {
  const someElf = new Elf([100, 200, 300])
  expect(someElf.getTotalCalories()).toBe(600);
})