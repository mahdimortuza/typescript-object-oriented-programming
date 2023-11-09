{
    // getter and setter
    class BankAccount {
        public readonly id: number
        public name: string
        protected _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id
            this.name = name
            this._balance = balance
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }

        //getter
        get balance() {
            return this._balance
        }



        // public getBalance() {
        //     return this._balance
        // }
    }

    const goribManusherrAccount = new BankAccount(101, "Mr. gorib", 20)
    // goribManusherrAccount.addDeposit(20)

    goribManusherrAccount.deposit = 50
    // const myBalance = goribManusherrAccount.getBalance()
    const myBalance = goribManusherrAccount.balance
    console.log(myBalance);





}