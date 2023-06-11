import List from './list.js';

const list = new List();

list.add(1);
list.add(2);
list.add(3);


list.insert(1, 7);
//list.insert(10, 7);

console.log(list.values());

console.log(list.size());