const express = require("express");

const app = express();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;
let attempts = 3;

function startGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 3;
  console.log('Guess the secret number (between 1 and 10). You have 3 attempts.\n');
  askQuestion();
}

function askQuestion() {
  rl.question('Enter your guess: ', (guess) => {
    const number = parseInt(guess);
    if (isNaN(number)) {
      console.log('Invalid input. Please enter a number.\n');
      askQuestion();
    } else {
      checkGuess(number);
    }
  });
}

function checkGuess(number) {
  if (number === secretNumber) {
    console.log('Congratulations! You guessed the secret number.\n');
    playAgain();
  } else {
    attempts--;
    if (attempts === 0) {
      console.log(`Wrong guess. You ran out of attempts. The secret number was ${secretNumber}.\n`);
      playAgain();
    } else {
      console.log(`Wrong guess. Try again. You have ${attempts} attempt(s) remaining.\n`);
      askQuestion();
    }
  }
}

function playAgain() {
  rl.question('Do you want to play again? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      startGame();
    } else {
      console.log('Thank you for playing! Goodbye.');
      rl.close();
    }
  });
}

startGame();

