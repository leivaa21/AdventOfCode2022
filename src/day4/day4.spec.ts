import JobAssignment from "./JobAssignment"
import JobPair from "./JobPair";

describe('Unit tests', () => {
  
  const someAssignment = new JobAssignment('2-8');
  const containedAssignment = new JobAssignment('3-7');
  
  it('shoud tell if its contained by', () => {
    expect(someAssignment.isContainedBy(containedAssignment)).toBeFalsy();
    expect(containedAssignment.isContainedBy(someAssignment)).toBeTruthy();  
  })

  it('should tell if a pair is fully Overlaped', () => {
    const pair = new JobPair(someAssignment, containedAssignment);
    expect(pair.theyFullyOverlap()).toBeTruthy();
  })

  it('should have some overlapping', () => {
    const worker = new JobAssignment('5-9');
    const independentWorker = new JobAssignment('1-1');

    expect(worker.hasSomeOverlapWith(someAssignment)).toBeTruthy();
    expect(independentWorker.hasSomeOverlapWith(someAssignment)).toBeFalsy();
  })
})