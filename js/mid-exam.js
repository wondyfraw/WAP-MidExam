/**
 * WAP Mid term Exam
 * 04/05/2020
 * Wondyfraw Hailu Ayele
 * */

"use Strict";
const  account = {
    accountNumber :  null,
    balance :  0.0,
    accountType : null,
    toString : function () {
         return ` {AccountNumber: ${this.accountNumber},balance: ${this.balance}, AccountType: ${this.accountType} }`
    }
}

const  savingsAccount = Object.create(account);
 savingsAccount.accountNumber = '10001';
 savingsAccount.balance = 125000.00;
 savingsAccount.accountType = 'Savings';

 console.log(savingsAccount.toString());
const checkingAccount = Object.create(account);
checkingAccount.accountNumber = '10002';
checkingAccount.balance = 75090.50;
checkingAccount.accountType = 'Checking';

console.log(checkingAccount.toString());

savingsAccount.addInterest = function (interestRate) {
    let newBalance = (savingsAccount.balance * interestRate)/100 + savingsAccount.balance;
    savingsAccount.balance = newBalance;
}

checkingAccount.deductMaintenanceFee = function (maintenanceFeeRate) {
   let newCheckBalance  =checkingAccount.balance - (checkingAccount.balance * maintenanceFeeRate)/100;
   checkingAccount.balance = newCheckBalance;
}

savingsAccount.addInterest(1.5);
checkingAccount.deductMaintenanceFee(10);

console.log(savingsAccount.toString());
console.log(checkingAccount.toString());