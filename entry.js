export class Entry{
    constructor(date, account, quantity ,amount ){
        this.date = date;
        this.account = account;
        this.credit = "Credit";
        this.quantity = quantity;
        this.amount = amount;
        this.bank = "bank";
        this.debit = "Debit";
    }

    toString () {
        let string = this.date +" | "+ this.account+" | "+ this.debit +" | "+ this.quantity+" | -"+ this.amount +"\n"
                            +this.bank +" | "+this.credit  +" | +"+ this.amount;
        console.log(string);
    }
}