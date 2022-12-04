import fileToStringArray from "../utils/fileToStringArray";
import JobAssignment from "./JobAssignment";
import JobPair from "./JobPair";

class JobPairRepository {
  readonly pairs = new Array<JobPair>();

  constructor(path: string) {
    const data = fileToStringArray(path);

    data.forEach(line => {
      if(line === '') return;
      const pair = line.split(',');
      const firstWorker = new JobAssignment(pair[0]);
      const secondWorker= new JobAssignment(pair[1]);
      const jobPair = new JobPair(firstWorker, secondWorker);
      this.pairs.push(jobPair);
    })
  }
}

export default JobPairRepository;