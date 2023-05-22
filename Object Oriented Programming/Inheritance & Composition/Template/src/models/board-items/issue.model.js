import { BoardItem } from './board-item.model';
import { issueStatus } from '../../common/issue-status.enum';

export class Issue extends BoardItem {
    #createdOn;
    #resolvedOn;
    #description;
    #status;

    constructor(name, createdOn, resolvedOn, descri) {
        super(name);
        this.createdOn = createdOn;

    }

    get createdOn() {
        return 
    }

    get resolvedOn() {

    }

    reset() {
        this.#status = issueStatus.RAISED;
    }

    advance() {
        this.#status = issueStatus.IN_REVIEW;
    }

    complete() {
        this.#status = issueStatus.RESOLVED;
    }

    toString() {
        return `* Issue *\n` +
                `Name: ${}` +
    }
}
