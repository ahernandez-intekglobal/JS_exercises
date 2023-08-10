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
    constructor(name){
        this.name = name;
        this._length = 0;
        this._clients = [];
    }
    // Creates new object of client info and push it to clients
    newAccount(name, balance = 0){
        let newClient = {
            accountNumber: this._length,
            balance: balance,
            name: name,
        }
        this._clients.push(newClient);
        this._length += 1;
        return newClient.accountNumber;
    }
    get_balance(client){
        if (client instanceof Client){
            // First comparation checks if account exists in the bank, second checks clients identity (name)
            // This can hold multiple banks and client must not be able to take money from other bank
            if (this._clients[client.accountNumber] && this._clients[client.accountNumber].name === client.name)
                return this._clients[client.accountNumber];
            else
                throw new Error(`Client does not have an account in this Bank`);
        }
    }
    deposit(client, destinationAccount, quantity){
        if (client instanceof Client){
            if(this._clients[destinationAccount]){
                let money_received = client.takePocketMoney(quantity);
                if (money_received){
                  this._clients[destinationAccount].balance += money_received; 
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
            if(this._clients[client.accountNumber] && this._clients[client.accountNumber].name === client.name){
                if(this._clients[client.accountNumber].balance >= quantity){
                    this._clients[client.accountNumber].balance -= quantity;
                    client.savePoketMoney(quantity);
                }
                else
                    throw new Error(`Client does not have enough balance ($${this._clients[client.accountNumber].balance}) to retrive ($${quantity})`);
            }
            else
                throw new Error(`Client does not have an account in this Bank`);
        }
        else throw Error("Only clients can perform this operation");
    }

}


class Client{
    constructor(name, bank, money){
        this.name = name;
        this._bank = bank;
        this._accountNumber = this._bank.newAccount(name);
        this._pocketMoney = money;
    }
    get accountNumber(){
        return this._accountNumber;
    }
    // Returns desired quantity and removes it from his poket money
    takePocketMoney(quantity){
        if (quantity > this._pocketMoney) return null;
        else{
            this._pocketMoney -= quantity;
            return quantity;
        }
    }
    // Takes money, no questions asked, just takes it
    savePoketMoney(quantity){
        this._pocketMoney += quantity;
    }
}
//// Monday:
// Bankoala opens its services
let bankoala = new Bank("Bankoala");
// Chuy creates his account while he is holding 200 bucks
let chuy = new Client("Chuy",bankoala,200);
// Chuy saves some money for later
bankoala.deposit(chuy,chuy.accountNumber,100);
// console.log(bankoala);
//// Tuesday:
// Pancho opnes his account while he is holding 300 bucks
let pancho = new Client("Pancho",bankoala,300);
// Pancho deposit some money to chuy's account that he owed him
bankoala.deposit(pancho,chuy.accountNumber,50);
// Pancho saves some money for his own
bankoala.deposit(pancho,pancho.accountNumber,150);
// console.log(bankoala);
//// Wednesday:
// Chuy retrieves some money
bankoala.retrieve(chuy,100);
// pancho tries to retrive 200 but he only has 150
bankoala.retrieve(pancho,200);