export class Entry{
    constructor(ID, date, account, quantity ,amount ){
        this.Id = ID;
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

    upload(APILINK){
      const payload = {"entryId": this.Id, "date": this.date, "account": this.account, "credit": this.credit, "quantity": this.quantity , "amount": this.amount, "bank": this.bank, "debit": this.debit}
        fetch(APILINK + "new", {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(res => res.json())
            .then(res => {
              console.log(res)
              location.reload();
            });
    }
}