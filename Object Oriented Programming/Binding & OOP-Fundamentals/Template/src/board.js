/** The Board class holds tasks */
export class Board {
  /** The list where all the tasks will be hold */
  _tasks = [];

  /**
   * Adds new task to the board, if it is valid.
   * @param {object} task Task to be added.
   */
  add(task) {
    if (this._tasks.includes(task)) {
      throw new Error('Task is already added!');
    }

    this._tasks.push(task);
  }

  /** Removes task from the board, if the board contains it.
   * @param {object} task Task to be removed.
   */
  remove(task) {
    if (!this._tasks.includes(task)) {
      throw new Error('Task is not in the list!');
    }

    const index = this._tasks.indexOf(task);
    return this._tasks.splice(index, 1);
  }

  /**
   * If the board is not empty, structures each of the tasks by 'Name', 'Status'
   * and 'Due' - (dueDate), making the board more readable.
   * @returns {string} Returns the structured tasks, or 'No tasks at the moment',
   * if the board is empty.
   */
  toString() {
    if (this._tasks.length === 0) {
      return 'No tasks at the moment.';
    } else {
      return this._tasks.reduce((list, currTask, index) => {
        const currTaskInfo = `Name: ${currTask._name}\nStatus: ${currTask._status}\nDue: ${currTask._dueDate.toLocaleString('en-US')}`;

        if (index === this._tasks.length - 1) {
          return list + currTaskInfo;
        }

        return list + currTaskInfo + '\n--------\n';
      }, '---Task Board---\n\nTasks:\n\n');
    }
  }
}
