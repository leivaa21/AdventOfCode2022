import { join } from "path";
import ItemPriorizator from "./ItemPriorizator";
import RucksackRepository from "./RucksackRepository";

const repository = new RucksackRepository(join(__dirname, './input'));
const priorizator = new ItemPriorizator();

// Part 1

const priorities = repository.rucksacks.map(rucksak => {
  const shared = rucksak.getShared();
  const priority = priorizator.execute(shared);
  return priority;
})

const sumOfPriorities = priorities.reduce((prev, curr) => prev + curr);

console.log(`The sum of shared's priorities is => ${sumOfPriorities}`);


// PART 2

const groups = repository.getByGroupsOfThree();
const groupBadgesPriorities = groups.map(group =>
  priorizator.execute(group.groupBadge)
)
const sumOfBadgePriorities = groupBadgesPriorities.reduce((prev, curr) => prev + curr);

console.log(`The sum of group badge's priorities is => ${sumOfBadgePriorities}`);
