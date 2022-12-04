class JobAssignment {
  readonly from: number;
  readonly to: number;

  readonly sections: Array<number>;
  constructor(line: string) {
    const digitsAsString = line.split('-');
    this.from = parseInt(digitsAsString[0]);  
    this.to = parseInt(digitsAsString[1]);
    
    const size = this.to - this.from + 1;


    const AuxArray = new Array<number>(size);
    AuxArray.fill(0);
    this.sections = AuxArray.map((section, index) => this.from + index)
  }

  isContainedBy(otherAssignment: JobAssignment) {
    return this.from >= otherAssignment.from && this.to <= otherAssignment.to 
  }

  hasSomeOverlapWith(otherAssignment: JobAssignment) {
    const overlaps = this.sections.map(section => {
      if(otherAssignment.sections.includes(section)) {
        return true;
      }
      return false;
    });
    return overlaps.includes(true);
  }
}

export default JobAssignment;