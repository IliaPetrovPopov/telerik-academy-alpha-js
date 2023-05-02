import { measure, takeMeasures } from '../src/utils/measure-utils.js';
import modifiers from '../src/utils/modifiers.js';
import { eq } from '../src/utils/object-utils.js';
import { rules } from '../src/utils/rules.js';
import { RulesetError } from '../src/utils/ruleset-error.js';
import data1 from './data/task1.js';
import data2 from './data/task2.js';
import data3 from './data/task3.js';
import solution1 from './solutions/task1.js';
import solution2 from './solutions/task2.js';
import solution3 from './solutions/task3.js';

export default [
  // Task 1
  {
    name: 'Usable properties',
    data: data1,
    solution: solution1,
    awardPartial: true,
    // full measurement score per case
    fullScore: 4,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.arrayMethods, takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return eq(result, test) ? 2 : 0;
    },
    // measure array methods used
    [takeMeasures.arrayMethods](measures, { input, output, test }, result) {
      if (test.length === 0) return 2;

      return Math.min(2, 0
        + (measures[measure.arrayMap] > 0 ? 1 : 0)
        + (measures[measure.arrayFilter] > 0 ? 1 : 0)
        + (measures[measure.arrayReduceRight] > 0 ? 1 : 0)
        + (measures[measure.arrayReduce] > 0 ? 1 : 0));
    },
  },

  // Task 2
  {
    name: 'People with cities and population',
    data: data2,
    solution: solution2,
    awardPartial: true,
    // full measurement score per case
    fullScore: 4,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.arrayMethods, takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return eq(result, test) ? 2 : 0;
    },
    // measure array methods used
    [takeMeasures.arrayMethods](measures, { input, output, test }, result) {
      if (input.people.length === 0) return 2;

      return Math.min(2, 0
        + (measures[measure.arrayMap] > 0 ? 1 : 0)
        + (measures[measure.arrayFilter] > 0 ? 1 : 0)
        + (measures[measure.arrayReduceRight] > 0 ? 1 : 0)
        + (measures[measure.arrayReduce] > 0 ? 1 : 0));
    },
  },

  // Task 3
  {
    name: 'Powerful pets',
    data: data3,
    solution: solution3,
    awardPartial: true,
    // full measurement score per case
    fullScore: 5,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.arrayMethods, takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return eq(result, test) ? 2 : 0;
    },
    // measure array methods used
    [takeMeasures.arrayMethods](measures, { input, output, test }, result) {

      if (test.length === 0) return 3;

      return Math.min(3, 0
        + (measures[measure.arrayMap] > 0 ? 1 : 0)
        + (measures[measure.arrayFilter] > 0 ? 1 : 0)
        + (measures[measure.arrayReduceRight] > 0 ? 1 : 0)
        + (measures[measure.arrayReduce] > 0 ? 1 : 0));
    },
  },

];
