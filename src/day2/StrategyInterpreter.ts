import { PossibleFirst, PossibleSecond } from "./types";

export type PlanLine = {first: PossibleFirst, second: PossibleSecond};

export default interface StrategyInterpreter {
  getScoreForLine({first, second}: PlanLine): number;
}