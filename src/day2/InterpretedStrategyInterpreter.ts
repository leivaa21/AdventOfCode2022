import StrategyInterpreter, { PlanLine } from "./StrategyInterpreter";
import { OponentPlay, pointsForPlaying, pointsForResult, possiblePlay } from "./types";

export default class InterpretedStrategyInterpreter implements StrategyInterpreter {
  
  private readonly interpretedPersonalPlay = new Map<string, possiblePlay>([
    ["X","ROCK"],
    ["Y", 'PAPER'],
    ["Z", 'SCISSORS']
  ]);

  getScoreForLine({ first, second }: PlanLine): number {
    let score = 0;
    const oponentMove = OponentPlay.get(first) as possiblePlay;
    const myMove = this.interpretedPersonalPlay.get(second) as possiblePlay;

    score += pointsForPlaying.get(myMove) as number;

    score += this.getResultScore(oponentMove, myMove);

    return score;

  }

  private getResultScore(oponentMove: possiblePlay, myMove: possiblePlay) {
    if(oponentMove === myMove) return pointsForResult.get('DRAW') as number;
  
    if(
      (oponentMove === 'PAPER' && myMove === 'SCISSORS')
      || (oponentMove === 'ROCK' && myMove === 'PAPER')
      || (oponentMove === 'SCISSORS' && myMove === 'ROCK')
    ) return pointsForResult.get('WIN') as number;
    
    return pointsForResult.get('LOSS') as number;
  }

}