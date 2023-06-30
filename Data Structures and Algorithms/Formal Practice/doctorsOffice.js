let input = ["Append Steven",
"Examine 1",
"Find Ina",
"Append Niki",
"Insert 0 Peter",
"Append Nadya",
"Insert 3 Grigor",
"Examine 5",
"Append Asya",
"Insert 4 Steven",
"Append Steven",
"Find Asya",
"Find Steven",
"Examine 3",
"Find Peter",
"Examine 4",
"Find Steven",
"Insert 1 Ina",
"End"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

class PersonOnQueue {

    constructor(name) {
        this.name = name;
        this.next = null;
        this.prev = null;
    }

}

class QueueForDoctor {

    comments = [];
    #head = null;
    #tail = null;
    #store = new Set();

    append(name) {
        const newPerson = new PersonOnQueue(name);

        if(!this.#tail) {
            this.#tail = newPerson;
            this.#head = this.#tail;
        } else {
            newPerson.prev = this.#tail;
            this.#tail.next = newPerson;
            this.#tail = newPerson;
        }

        this.#store.add(newPerson);

        this.comments.push('OK');
        return;
    }

    insert(position, name) {
        if(position < 0 || position > this.#store.size) {
            this.comments.push('Error');
            return;
        }

        if(position === 0) {
            this.insertFirst(name);
            this.comments.push('OK');
            return;
        }

        if (position === this.#store.size) {
            this.insertLast(name);
            this.comments.push('OK');
            return;
        }

        const newPerson = new PersonOnQueue(name);
        let start = this.#head;

        for (let i = 1; ; i++) {
            if(i === position) {
                newPerson.next = start;
                newPerson.prev = start.prev;
                start.prev.next = newPerson;
                start.prev = newPerson;

                this.#store.add(newPerson);
                break;
            } 

            start = start.next;
        }
        

        this.comments.push('OK');
        return;
    }

    find(name) {

        let nameCounter = 0;
        let start = this.#head;

        while(start) {
            if(start.name === name) {
                ++nameCounter;
            }

            start = start.next;
        }

        this.comments.push(nameCounter);
        return;
    }

    examine(count) {
        if(count > this.#store.size || !count) {
            this.comments.push('Error');
            return;
        }

        let examinedPpl = '';

        for(let i = 0; i < count; i++) {
            examinedPpl += this.deleteFirst() + " ";
        }

        this.comments.push(examinedPpl);
        return;
    }

    insertFirst(name) {
        const newPerson = new PersonOnQueue(name);

        if(this.#head === null) {
            this.#head = newPerson;
            this.#tail = this.#head;
        } else {
            newPerson.next = this.#head;
            this.#head.prev = newPerson;
            this.#head = newPerson;
        }

        this.#store.add(newPerson);
    }

    insertLast(name) {
        const newPerson = new PersonOnQueue(name);

        if(this.#tail === null) {
            this.#tail = newPerson;
            this.#head = this.#tail;
        } else {
            newPerson.prev = this.#tail;
            this.#tail.next = newPerson;
            this.#tail = newPerson;
        }

      this.#store.add(newPerson);
    }

    deleteFirst() {

        this.#store.delete(this.#head);
        const name = this.#head.name;
        this.#head = this.#head.next;

        if(!this.#head) {
            this.#tail = null;
        } else {
            this.#head.prev = null;
        }

        return name;
    }
}

const queue = new QueueForDoctor();

while(true) {
    const currentCommand = gets().split(' ');

    if(currentCommand[0] === 'End') {
        break;
    }

    if(currentCommand[0] === 'Append') {
        const nameToAppend = currentCommand[1];
        queue.append(nameToAppend);

    } else if(currentCommand[0] === 'Insert') {
        const insertPlace = +currentCommand[1];
        const personName = currentCommand[2];

        queue.insert(insertPlace, personName);

    } else if(currentCommand[0] === 'Find') {
        const specName = currentCommand[1];
        queue.find(specName);

    } else if(currentCommand[0] === 'Examine') {
        const pplToExamine = +currentCommand[1];
        queue.examine(pplToExamine);

    }   
}

queue.comments.forEach(x => print(x));