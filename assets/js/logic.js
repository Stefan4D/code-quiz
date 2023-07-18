// This file will contain the application logic for the game including timer, button click event handling, playing associated audio for correct/incorrect and managing the overall game event loop

// import the question set
import { questions } from "./questions.js";

console.log(questions.length);
console.log(questions[0]);

// grab the DOM elements
const time = document.getElementById("time");
const questionContainer = document.getElementById("questions"); // to allow to set the style from hide to visible - programmatically add/remove the class using the .classList.add() and .remove() methods
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");

const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");

// Initialise variables
let timer = 5;

// include this interval within the core game function WHILE  timer > 0 || numQuestionsRemaining > 0 - can use a copy of the array and use .pop() and then just check the .length property
setInterval(() => {
  if (timer > 0) {
    timer -= 1;
    time.innerText = timer;
  } else {
    time.innerText = "Time's up!";
  }
}, 1000);

// add question answer options to the choices div
// example before creating gameplay loop
questionContainer.classList.remove("hide");
questions[0].options.forEach((choice) => {
  choices.innerHTML += `<button value='${choice}' id='${questions[0].question}-${choice}'>${choice}</button>`;
});

// USER STORY
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// ACCEPTANCE CRITERIA
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
