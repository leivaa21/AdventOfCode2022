import { join } from "path";

import fileToStringArray from "../utils/fileToStringArray";

import StrategyAnalizer from "./StrategyAnalizer";
import InterpretedStrategyInterpreter from "./InterpretedStrategyInterpreter";
import RealStrategyInterpreter from "./RealStrategyInterpreter";

const data = fileToStringArray(join(__dirname, './input'));

const interpretedStrategyInterpreter = new InterpretedStrategyInterpreter();
const interpretedStrategyAnalizer = new StrategyAnalizer(
  data,
  interpretedStrategyInterpreter
);

const interpretedScore = interpretedStrategyAnalizer.analize();
console.log(`Interpreted Strategy prediction: ${interpretedScore}`)


const realStrategyInterpreter = new RealStrategyInterpreter();
const realStrategyAnalizer = new StrategyAnalizer(
  data,
  realStrategyInterpreter
)

const realScore = realStrategyAnalizer.analize();
console.log(`Real Strategy prediction: ${realScore}`)
