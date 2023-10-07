import {Entry} from "./entry.js";

export class Journal{
    entries;
    constructor(){
        this.entries = new Array();
    }

    printJournal() {
        for( let i = 0; i < this.entries.length; i++){
            this.entries[i].toString();
        }
    }

    addEntry(date, account, quantity, amount){
        this.entries.push(new Entry(date, account, quantity, amount))
    }
}