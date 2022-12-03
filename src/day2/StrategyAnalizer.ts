import StrategyInterpreter, { PlanLine } from "./StrategyInterpreter";
import { PossibleFirst, PossibleSecond } from "./types";

export default class StrategyAnalizer {
  constructor(
    private readonly data: string[],
    private readonly interpreter: StrategyInterpreter,
  ) {}

  analize() {
    let score = 0;
    this.data.forEach(line => {
      if(line === '') return;
      const lineSplitted = line.split(' ')
      const planLine: PlanLine = {
        first: lineSplitted[0] as PossibleFirst,
        second: lineSplitted[1] as PossibleSecond,
      }
      score += this.interpreter.getScoreForLine(planLine);
    })
    return score;
  }
}