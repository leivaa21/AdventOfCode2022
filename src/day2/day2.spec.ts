import { join } from "path";
import fileToStringArray from "../utils/fileToStringArray";
import InterpretedStrategyInterpreter from "./InterpretedStrategyInterpreter";
import RealStrategyInterpreter from "./RealStrategyInterpreter";
import StrategyAnalizer from "./StrategyAnalizer";


describe('Part 1', () => {
  it('should return 15 with mocked input', () => {

    const data = fileToStringArray(join(__dirname, './mockedInput'));
  
    const interpreter = new InterpretedStrategyInterpreter();
    const analizer = new StrategyAnalizer(
      data,
      interpreter
    );
  
    expect(analizer.analize()).toBe(15)
  
  });  
})

describe('Part 2', () => {

  it('should return 12 with mocked input', () => {

    const data = fileToStringArray(join(__dirname, './mockedInput'));
  
    const interpreter = new RealStrategyInterpreter();
    const analizer = new StrategyAnalizer(
      data,
      interpreter
    );
  
    expect(analizer.analize()).toBe(12)
  
  });

})
