export class Entry{
    constructor(date, account, quantity ,amount ){
        this.date = date;
        this.account = account;
        this.dc = "Credit";
        this.quantity = quantity;
        this.amount = amount;
        this.bank = "bank";
        this.debit = "Debit";
    }

    toString () {
        let string = this.date +" | "+ this.bank +" | "+ this.dc +" | "+ this.quantity+" | +"+ this.amount +"\n"
                            + this.account+" | "+ this.debit+" | -"+ this.amount;
        console.log(string);
    }
}