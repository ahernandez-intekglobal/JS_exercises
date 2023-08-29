'use strict'
// Implement the following:
//     [a] A bank that holds client’s information:
//         [i] account number;
//         [ii] balance
//     [b] A set of clients where each can:
//         [i] hold money of their own;
//         [ii] deposit money into the bank (to any account);
//         [iii] retrieve money from the bank (from personal account only);
//         [iv]view current balance in bank (from personal account only)
//     [c] A client cannot deposit more money than what it has;
//     [d] A client cannot retrieve more money that what is in its account;
//     [e] All financial information must be private

class Bank{
    #nextClientUID;
    #clients;
    constructor(name){
        this.name = name;
        this.#nextClientUID = 0;
        this.#clients = [];
    }
    // Creates new object of client info and push it to clients
    newAccount(name, balance = 0){
        let newClient = {
            accountNumber: this.#nextClientUID,
            balance: balance,
            name: name,
        }
        this.#clients.push(newClient);
        this.#nextClientUID += 1;
        return newClient.accountNumber;
    }
    getBalance(client){
        if (client instanceof Client){
            // First comparation checks if account exists in the bank, second checks clients identity (name)
            // This can hold multiple banks and client must not be able to take money from other bank
            if (this.#clients[client.accountNumber] && this.#clients[client.accountNumber].name === client.name)
                return this.#clients[client.accountNumber].balance;
            else
                throw new Error(`Client does not have an account in this Bank`);
        }
    }
    deposit(client, destinationAccount, quantity){
        if (client instanceof Client){
            if(this.#clients[destinationAccount]){
                let moneyReceived = client.usePocketMoney(quantity);
                if (moneyReceived){
                  this.#clients[destinationAccount].balance += moneyReceived; 
                }
                else
                  throw new Error(`Client does not have enough poket money for this operation`)
            }
            else
                throw new Error("Destination account does not exist");
        }
        else throw Error("Only clients can perform this operation");
    }
    retrieve(client, quantity){
        if (client instanceof Client){
            if(this.#clients[client.accountNumber] && this.#clients[client.accountNumber].name === client.name){
                if(this.#clients[client.accountNumber].balance >= quantity){
                    this.#clients[client.accountNumber].balance -= quantity;
                    client.savePoketMoney(quantity);
                }
                else
                    throw new Error(`Client does not have enough balance ($${this.#clients[client.accountNumber].balance}) to retrive ($${quantity})`);
            }
            else
                throw new Error(`Client does not have an account in this Bank`);
        }
        else throw Error("Only clients can perform this operation");
    }

}


class Client{
    #bank;
    #accountNumber;
    #pocketMoney;
    constructor(name, bank, money){
        this.name = name;
        this.#bank = bank;
        this.#accountNumber = this.#bank.newAccount(name);
        this.#pocketMoney = money;
    }
    get accountNumber(){
        return this.#accountNumber;
    }
    // Returns desired quantity and removes it from his poket money
    usePocketMoney(quantity){
        // If a client wants to use more money that he has, he will not use any money
        if (quantity > this.#pocketMoney)
            throw new Error(`${this.name} does not have enough money on pocket (${this.#pocketMoney}) to use (${quantity})`)
        // Otherwise he will use his money
        else{
            this.#pocketMoney -= quantity;
            return quantity;
        }
    }
    // Saves money, no questions asked, just saves it
    savePoketMoney(quantity){
        this.#pocketMoney += quantity;
    }
  get pocketMoney(){
    return this.#pocketMoney;
  }
  printFinnances(){
    console.log(`${this.name} has $${this.#pocketMoney} in pocket and $${this.#bank.getBalance(this)} in bank`);
  }
}

console.log("////  Monday");
console.log("Bankoala opens its services");
let bankoala = new Bank("Bankoala");
console.log("Chuy creates his account while he has 200 bucks on pocket");
let chuy = new Client("Chuy",bankoala,200);
chuy.printFinnances();
console.log("Chuy saves some money for later");
bankoala.deposit(chuy,chuy.accountNumber,100);
chuy.printFinnances();
console.log("//// Tuesday");
console.log("Pancho opens his account while he has 300 bucks on pocket");
let pancho = new Client("Pancho",bankoala,300);
pancho.printFinnances();
console.log("Pancho deposit some money to chuy's account that he owed him");
bankoala.deposit(pancho,chuy.accountNumber,50);
chuy.printFinnances();
pancho.printFinnances();
console.log("Pancho saves some money for his own");
bankoala.deposit(pancho,pancho.accountNumber,150);
pancho.printFinnances();
console.log("//// Wednesday");
console.log("Chuy retrieves some money");
bankoala.retrieve(chuy,100);
chuy.printFinnances();

//// Errors
// Next lines should throw error, uncomment them to see errors.
// console.log("//// Error 1");
// pancho.printFinnances();
// console.log("pancho tries to retrive 200 but he only has 150 on balance");
// bankoala.retrieve(pancho,200);

console.log("//// Error 2");
pancho.printFinnances()
console.log("Pancho wants to deposit 200 bet he only has 100 on his pocket");
bankoala.deposit(pancho,pancho.accountNumber,200);