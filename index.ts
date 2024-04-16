#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer


const randomNumber = Math.floor(Math.random()* 6 + 1 );


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed the right number!")
}else{
    console.log("Oops! Looks like you guessed the wrong number!");
}