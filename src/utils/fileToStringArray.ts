import { readFileSync } from "fs";
import { join } from "path";

function fileToStringArray(filePath: string): Array<string> {
  try {
    const data = readFileSync(filePath);
    return data.toString().split('\n');  
  } catch(err) {
    throw new Error(`Failed to read ${filePath}`);
  }
}

export default fileToStringArray;