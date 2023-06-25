export class Phonebook {
  contacts;

  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (!contact) {
      throw new Error('Please provide a contact!');
    }

    if (this.contacts.some((c) => c.name === contact.name)) {
      throw new Error('This contact already exists in the phonebook!');
    }

    this.contacts.push(contact);
  }

  removeContact(name) {
    if (!name) {
      throw new Error('Please provide a contact name!');
    }

    const contact = this.contacts.find((c) => c.name === name);
    if (!contact) {
      throw new Error(`Contact ${name} does not exist!`);
    }

    this.contacts = this.contacts.filter((c) => c.name !== name);
  }

  updateContact(name, phone) {
    if (!name) {
      throw new Error('Please provide a contact name!');
    }

    const contact = this.contacts.find((c) => c.name === name);
    if (!contact) {
      throw new Error(`Contact ${name} does not exist!`);
    }

    contact.setPhone(phone);
  }

  listAllContacts() {
    if (this.contacts.length === 0) {
      return 'No contacts.';
    }

    return 'All contacts:\n' + this.contacts
        .map((c) => `  ${c.name}: [${c.phone}]`)
        .join('\n');
  }

  search(partialName) {
    if (!partialName) {
      throw new Error('Please provide a contact name!');
    }
    return this.contacts.filter((c) => c.name.includes(partialName));
  }
}

