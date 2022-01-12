class Account {
    constructor(name, balance) {
        this.id  = 0
        this._name = name
        this._balance = balance
    };
     
    // get id() {
    //     return this._id
    // };
    get name() {
        return this._name
    };
    get balance() {
        return this._balance
    };

    set name(newName) {
        this._name = newName
    };
    set balance(newBalance) {
        this._balance = newBalance
    };
    

    credit = function(amount) {
        this._balance+=amount
        return this._balance
    };
    debit = function(amount) {
        if (amount <= this._balance) {
            this._balance-=amount
            return this._balance
        }
        return `${amount} exceeded balance, which is ${this._balance}`
        
    };
    transferTo = function(anotherAccount, amount) {
        if (amount <= this._balance) {
            this._balance-=amount
            anotherAccount += amount
            return this._balance
        }
        return `${amount} exceeded balance, which is ${this._balance}`
        
    };
    static identifyAccounts = function(accountFirst, accountSecond) {
        if (accountFirst === accountSecond) {
            return true
        }
        return false
    };
    toString = function() {
        return `${this._name}'s account balance is $${this._balance}.`
    };

 
}


let savingAcc = new Account("Saving account", 2000)
let cardAcc = new Account("Card account", 1000)
let anotherAcc = savingAcc;

console.log(savingAcc.credit(5000))
console.log(savingAcc.debit(2500))
console.log(savingAcc.transferTo(cardAcc, 500))
console.log(cardAcc.balance)
console.log(Account.identifyAccounts(savingAcc, anotherAcc))
console.log(Account.identifyAccounts(savingAcc, cardAcc))
console.log(savingAcc.toString())