export class Account {
  #name;
  #amount;

  constructor(name) {
    if (!name) {
      throw new Error('name must be defined');
    }

    if (name.length < 3) {
      throw new Error('name.length must be >= 3');
    }

    this.#name = name;
    this.#amount = 0;
  }

  get name() {
    return this.#name;
  }
  get amount() {
    return this.#amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('deposit expects a positive number');
    }

    // apply 5% tax for large deposits
    if (amount > 10000) {
      amount = amount * 0.95;
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('withdraw expects a positive number');
    }

    if (this.#amount - amount < 0) {
      throw new Error('insufficient funds');
    }

    this.#amount -= amount;
  }
}