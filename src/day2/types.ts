export type PossibleFirst = 'A' | 'B' | 'C';
export type PossibleSecond = 'X' | 'Y' | 'Z';


export type possibleResult = 'WIN' | 'LOSS' | 'DRAW'
export const pointsForResult = new Map<possibleResult, number>([
  ['WIN', 6],
  ['DRAW', 3],
  ['LOSS', 0]
])

export type possiblePlay = 'ROCK' | 'PAPER' | 'SCISSORS';

export const pointsForPlaying = new Map<possiblePlay, number>([
  ['SCISSORS', 3],
  ['PAPER', 2],
  ['ROCK', 1]
])


export const OponentPlay = new Map<string, possiblePlay>([
  ["A","ROCK"],
  ["B", 'PAPER'],
  ["C", 'SCISSORS']
]);
