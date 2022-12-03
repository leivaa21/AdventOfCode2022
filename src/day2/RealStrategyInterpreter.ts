import StrategyInterpreter, { PlanLine } from "./StrategyInterpreter";
import { OponentPlay, pointsForPlaying, pointsForResult, possiblePlay, possibleResult, PossibleSecond } from "./types";

export default class RealStrategyInterpreter implements StrategyInterpreter {
  
  private readonly secondRealMeaning = new Map<PossibleSecond, possibleResult>([
    ["X",'LOSS'],
    ["Y", 'DRAW'],
    ["Z", 'WIN']
  ]);
  

  getScoreForLine({ first, second }: PlanLine): number {
    let score = 0;
    const desiredResult = this.secondRealMeaning.get(second) as possibleResult;
    score += pointsForResult.get(desiredResult) as number;
    
    const oponentMove = OponentPlay.get(first) as possiblePlay;
    const myPlay = this.whatINeedToPlay(oponentMove, desiredResult)

    score += pointsForPlaying.get(myPlay) as number;

    return score;
  }

  whatINeedToPlay(oponentMove: possiblePlay, desiredResult: possibleResult): possiblePlay {
    if(
      (oponentMove === 'PAPER' && desiredResult === 'DRAW')
      || (oponentMove === 'ROCK' && desiredResult === 'WIN')
      || (oponentMove === 'SCISSORS' && desiredResult === 'LOSS')
    ) {
      return 'PAPER'
    }
    if(
      (oponentMove === 'ROCK' && desiredResult === 'DRAW')
      || (oponentMove === 'SCISSORS' && desiredResult === 'WIN')
      || (oponentMove === 'PAPER' && desiredResult === 'LOSS')
    ) {
      return 'ROCK'   
    }
    return 'SCISSORS'
  }


}