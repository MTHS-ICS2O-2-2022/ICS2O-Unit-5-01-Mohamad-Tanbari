// Copyright (c) Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2023
// This file contains the JS functions for index.html

'use strict'

// This code generates a random number between 1 and 5 that is required for the guessNumber() function
const randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)

/*
* This function checks if the number guessed is correct
*/
function guessNumber() {
  // Get user input
  const guess = parseInt(document.getElementById('guess').value)

  // Check if guess is correct
  if (guess == randomNumber) {
    document.getElementById('answer').innerHTML = 'Your guess is Correct!'
  } else {
    document.getElementById("answer").innerHTML = "Your guess is Wrong :("
  }
}
