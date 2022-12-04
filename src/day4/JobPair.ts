import JobAssignment from "./JobAssignment";

class JobPair {
  constructor(
    readonly firstWorker: JobAssignment,
    readonly secondWorker: JobAssignment
  ) {}

  theyFullyOverlap() {
    return (
      this.firstWorker.isContainedBy(this.secondWorker)
      || this.secondWorker.isContainedBy(this.firstWorker)
    );
  }

  haveSomeOverlapping() {
    return this.firstWorker.hasSomeOverlapWith(this.secondWorker);
  }
}

export default JobPair;