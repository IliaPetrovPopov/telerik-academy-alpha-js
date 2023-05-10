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
    name: 'Neighboring cells',
    data: data1,
    solution: solution1,
    awardPartial: true,
    // full measurement score per case
    fullScore: 1,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return eq(result, test) ? 1 : 0;
    },
  },

  // Task 2
  {
    name: 'Special mapping function',
    data: data2,
    solution: solution2,
    awardPartial: true,
    // full measurement score per case
    fullScore: 5,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.arrayMethods, takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return eq(result(output), test) ? 4 : 0;
    },
    // measure array methods used
    [takeMeasures.arrayMethods](measures, { input, output, test }, result) {
      if (output.length === 0) return 1;

      return Math.min(1, 0
        + (measures[measure.arrayMap] > 0 ? 1 : 0)
        + (measures[measure.arrayReduceRight] > 0 ? 1 : 0)
        + (measures[measure.arrayReduce] > 0 ? 1 : 0));
    },
  },

  // Task 3
  {
    name: 'Students graduation',
    data: data3,
    solution: solution3,
    awardPartial: true,
    // full measurement score per case
    fullScore: 6,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.arrayMethods, takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {
      let score = 0;
      if (result.graduates.length === test.graduates.length) score++;
      if (result.nonGraduates.length === test.nonGraduates.length) score++;

      return eq(result, test) ? score + 3 : score;
    },
    // measure array methods used
    [takeMeasures.arrayMethods](measures, { input, output, test }, result) {

      if (test.length === 0) return 1;

      return Math.min(1, 0
        + (measures[measure.arrayMap] > 0 ? 1 : 0)
        + (measures[measure.arrayFilter] > 0 ? 1 : 0)
        + (measures[measure.arrayReduce] > 0 ? 1 : 0));
    },
  },

];
