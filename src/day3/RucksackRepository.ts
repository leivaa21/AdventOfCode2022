import fileToStringArray from "../utils/fileToStringArray";
import ElfGroup from "./ElfGroup";
import Rucksack from "./Rucksack";

class RucksackRepository {
  public readonly rucksacks: Array<Rucksack> = new Array<Rucksack>();
  constructor(path: string) {
    const data = fileToStringArray(path);
    data.forEach(line => {
      if(line === '') return
      this.rucksacks.push(new Rucksack(line));
    });
  }

  getByGroupsOfThree() {
    let buffer = new Array<Rucksack>();
    const groups = new Array<ElfGroup>();

    this.rucksacks.forEach(rucksack => {
      buffer.push(rucksack);
      if(buffer.length === 3) {
        const group = new ElfGroup(buffer);
        groups.push(group);
        buffer = new Array<Rucksack>();
        return;
      }
    })
    return groups;
  }
}
export default RucksackRepository;