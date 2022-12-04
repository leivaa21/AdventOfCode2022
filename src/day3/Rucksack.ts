class Rucksack {
  readonly compartiments = new Array<Array<string>>(2);
  
  constructor(readonly items: string) {
    const midIndex = this.items.length / 2;
    this.compartiments[0] = this.items.slice(0, midIndex).split('');
    this.compartiments[1] = this.items.slice(midIndex).split('');
  }

  getShared(): string {
    const shared = this.compartiments[0].find(item => this.compartiments[1].includes(item));
    if(!shared) throw new Error('Nothing shared')
    return shared;
  }

}

export default Rucksack;