// // Step 1: Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(`Random Number (for testing): ${randomNumber}`); // Debugging

// // Step 2: Initialize variables
// let guess;
// let attempts = 0;

// // Step 3: Create the guessing loop
// while (true) {
//   // Ask user for input
//   guess = prompt('Guess a number between 1 and 100:');

//   // Convert input to a number
//   guess = Number(guess);
//   attempts++;

//   // Validate input
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log('Please enter a valid number between 1 and 100.');
//     continue;
//   }

//   // Check the guess
//   if (guess === randomNumber) {
//     console.log(`Correct! The number was ${randomNumber}.`);
//     console.log(`You guessed it in ${attempts} attempts.`);
//     break;
//   } else if (guess < randomNumber) {
//     console.log('Too Low. Try again!');
//   } else {
//     console.log('Too High. Try again!');
//   }
// }

/// ANOTHER

//Generate a random number
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// let attempts = 0;
// let gameOver = false;

// while (!gameOver) {
//   // Ask user for input
//   const input = prompt('Guess a number between 1 and 100:');

//   // If user cancels
//   if (input === null) {
//     console.log('Game canceled by the user.');
//     break;
//   }

//   // Convert input to a number
//   const guess = Number(input);
//   attempts++;

//   // Validate the input
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log('Please enter a valid number between 1 and 100.');
//     continue;
//   }

//   // Check the guess
//   if (guess === randomNumber) {
//     console.log(`Correct! The number was ${randomNumber}.`);
//     console.log(`You guessed it in ${attempts} attempts.`);
//     gameOver = true; // Exit condition
//   } else if (guess < randomNumber) {
//     console.log('Too Low. Try again!');
//   } else {
//     console.log('Too High. Try again!');
//   }
// }
// Testing;
// const userInput = prompt('Enter a number:');
// console.log(`You entered: ${userInput}`);

// Again
// Step 1: Generate a random number
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// // console.log(`Random Number (for testing): ${randomNumber}`); // Debugging

// // Step 2: Initialize variables
// let attempts = 0;

// // Step 3: Create the guessing loop
// while (true) {
//   // Ask user for input
//   let guess = prompt('Guess a number between 1 and 100:');

//   // If the user cancels the prompt
//   if (guess === null) {
//     console.log('Game canceled.');
//     break;
//   }

//   // Convert input to a number
//   guess = Number(guess);
//   attempts++;

//   // Validate input
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log('Please enter a valid number between 1 and 100.');
//     continue; // Go back to the beginning of the loop
//   }

//   // Check the guess
//   if (guess === randomNumber) {
//     console.log(`Correct! The number was ${randomNumber}.`);
//     console.log(`You guessed it in ${attempts} attempts.`);
//     break; // Exit the loop
//   } else if (guess < randomNumber) {
//     console.log('Too Low. Try again!');
//   } else {
//     console.log('Too High. Try again!');
//   }
// }

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);

// let attempts = 0;
// let guess;
// let running = true;
// while (running) {
//   guess = window.prompt('Guess the number between 1 - 100');
//   guess = Number(guess);
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log('Please enter a valid number between 1 and 100.');
//     continue; // Go back to the beginning of the loop
//   } else if (guess === randomNumber) {
//     console.log(`Correct! The number was ${randomNumber}.`);
//     console.log(`You guessed it in ${attempts} attempts.`);
//     break; // Exit the loop
//   } else if (guess < randomNumber) {
//     console.log('Too Low. Try again!');
//   } else {
//     console.log('Too High. Try again!');
//   }
//   attempts++;
//   // console.log(guess);
//   // running = false;
// }

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guess;
let running = true;

while (running) {
  // guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = window.prompt('guess the number between 1 and 100');
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    window.alert('Please enter a valid number');
  } else {
    // attempts++;
    if (guess < randomNumber) {
      window.alert('TOO LOW! TRY AGAIN!');
    } else if (guess > randomNumber) {
      window.alert('TOO HIGH! TRY AGAIN!');
    } else {
      window.alert(
        `CORRECT! The answer was ${randomNumber}. It took you ${attempts} attempts`
      );
      running = false;
    }
    attempts++;
  }
}
