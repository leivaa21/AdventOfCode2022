import Rucksack from "./Rucksack";

class ElfGroup {
  readonly groupBadge: string;
  constructor(public readonly ElfRucksacks: Array<Rucksack>) {
    if(this.ElfRucksacks.length !== 3) {
      throw new Error('Groups should be of 3!');
    }
    this.groupBadge = this.getGroupBadge();
  }

  private getGroupBadge() {
    const items = this.ElfRucksacks.map(rucksack => rucksack.items);
    const badge = items[0].split('').find(item =>
      items[1].split('').includes(item)
      && items[2].split('').includes(item)
    )
    
    if(!badge) {
      throw new Error('Failed to find badge');
    }

    return badge;
  }
}

export default ElfGroup;