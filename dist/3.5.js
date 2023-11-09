"use strict";
{
    // access modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const goribManusherrAccount = new BankAccount(101, "Mr. gorib", 20);
    goribManusherrAccount.addDeposit(20);
    const myBalance = goribManusherrAccount.getBalance();
    console.log(myBalance);
}
