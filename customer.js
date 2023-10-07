export class Customer {
    #id;
    #name;
    #cellnumber;

    constructor(id, name, cellnumber) {
        this.#id = id;
        this.#name = name;
        this.#cellnumber = cellnumber;
    }

    // Getter methods for private fields (optional)
    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getCellNumber() {
        return this.#cellnumber;
    }
}
