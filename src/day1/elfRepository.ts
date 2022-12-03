import { join } from "path";
import fileToStringArray from "../utils/fileToStringArray";
import Elf from "./elf";

export default class ElfRepository {
  private readonly _elfs = new Array<Elf>();
  constructor(private readonly dataPath: string) {
    const filePath = join(__dirname, this.dataPath);
    const data = fileToStringArray(filePath);
    
    let buffer = new Array<number>();
    data.map(line => {
      if(line === '') {
        const elf = new Elf(buffer)
        this._elfs.push(elf);
        buffer = new Array<number>();
      }
      else {
        buffer.push(parseInt(line));
      }
    })
  }

  getElfWithMostCalories() {
    let theChosenElf: Elf = this._elfs[0];
    this._elfs.forEach(elf => {
      if(elf.getTotalCalories() > theChosenElf.getTotalCalories()) {
        theChosenElf = elf;
      }
    })
    return theChosenElf;
  }

  getTopElfsWithMostCalories(podiumSize: number) {
    let elfsPodium = new Array<Elf>(podiumSize);
    elfsPodium.fill(this._elfs[0]);

    this._elfs.forEach(elf => {
      const elfCalories = elf.getTotalCalories()
      let alreadyAddedToPodium = false;
      elfsPodium.forEach((podiumElf, index) => {
        if(alreadyAddedToPodium) return; 
        if(podiumElf.getTotalCalories() < elfCalories) {
          elfsPodium = this.reorganizePodiumArray(elf, index, elfsPodium)
          alreadyAddedToPodium = true;
        }
      })
    })

    return elfsPodium;
  }

  reorganizePodiumArray(newElf: Elf, podiumNumber: number, podium: Array<Elf>) {
    if(podiumNumber === podium.length - 1) {
      podium[podiumNumber] = newElf;
      return podium;
    }
    const newPodium = podium;
    let auxElf = podium[0];
    podium.forEach((someElf, index) => {
      if(index < podiumNumber) return;
      if(index === podiumNumber) {
        auxElf = someElf;
        newPodium[index] = newElf;
        return;
      }
      newPodium[index] = auxElf;
      auxElf = someElf
    })

    return newPodium;
  }

}