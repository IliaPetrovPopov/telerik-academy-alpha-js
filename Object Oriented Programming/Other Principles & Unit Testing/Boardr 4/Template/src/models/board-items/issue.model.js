import { BoardItem } from './board-item.model.js';
import { issueStatus } from '../../common/issue-status.enum.js';
import moment from 'moment';

export class Issue extends BoardItem {

  static #minDescriptionLength = 10;
  static #maxDescriptionLength = 40;

  #status;
  #createdOn;
  #resolvedOn;
  #description;

  constructor(name, description) {
    super(name);

    this.description = description;
    this.#createdOn = new Date();
    this.#resolvedOn = null;
    this.#status = issueStatus.RAISED;
  }

  get status() {
    return this.#status;
  }

  get createdOn() {
    return this.#createdOn;
  }

  get resolvedOn() {
    return this.#resolvedOn;
  }

  set description(value) {
    if (!value) {
      throw new Error('No description provided!');
    }
    if (value.length < Issue.#minDescriptionLength || value.length > Issue.#maxDescriptionLength) {
      throw new Error(`Issue description must be between ${Issue.#minDescriptionLength} and ${Issue.#maxDescriptionLength} characters!`);
    }

    this.#description = value;
  }

  get description() {
    return this.#description;
  }

  reset() {
    this.#status = issueStatus.RAISED;
    this.#resolvedOn = null;
  }

  advance() {
    this.#status = issueStatus.IN_REVIEW;
    this.#resolvedOn = null;
  }

  complete() {
    this.#status = issueStatus.RESOLVED;
    this.#resolvedOn = new Date();
  }

  toString() {
    return `${super.toString()}
Status: ${this.#status}
Description: ${this.description}
Created on: ${this.formatCreatedOn()}
Resolved on: ${this.formatResolvedOn()}`;
  }

  formatCreatedOn() {
    return moment(this.createdOn).format('MMMM Do YYYY, hh:mm:ss');
  }

  formatResolvedOn() {
    if (this.resolvedOn) {
      return moment(this.resolvedOn).format('MMMM Do YYYY, hh:mm:ss');
    }

    return 'Not yet resolved';
  }

}