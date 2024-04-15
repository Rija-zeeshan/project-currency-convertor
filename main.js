#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t welcome to RIJA ZEESHAN currency convertor\n"));
//define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency (Euro)
    "JYP": 113, //japenese currency (Yen)
    "CAD": 1.3, //canadian Dollar
    "AUD": 1.65, //australian dollar
    "PKR": 277.70, // pakistani rupees
    //add more currencies and their exchange rates here
};
//prompt the user to select currencies to convert from and to
let user_answere = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answere.from_currency];
let to_amount = exchange_rate[user_answere.to_currency];
let amount = user_answere.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the convertrd amount 
console.log(`converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
