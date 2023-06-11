import List from './list.js';
const list = new List();

list.add(12);
list.add(15);
list.add(17);
list.add(1);
list.add(10);
list.add(17);

let maxElemValue = Number.MIN_VALUE;
let maxElemIndex = -1;
// for (let index = 0; index < list.size(); index++) {
//   const currentElem = list.get(index);
//   if (currentElem >= maxElemValue){
//     maxElemValue = currentElem;
//     maxElemIndex = index;
//   }
// }

list.forEach((index, currentElem) => {
  if (currentElem >= maxElemValue) {
    maxElemValue = currentElem;
    maxElemIndex = index;
  }
})

list.remove(maxElemIndex);
list.insert(0, maxElemValue);


console.log(list.values());



