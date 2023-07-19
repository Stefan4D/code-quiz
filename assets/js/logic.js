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
const startButton = document.getElementById("start");

/* 

---------------
Event handlers
---------------

*/

// this handles hiding the start screen and showing the questions
startButton.addEventListener("click", () => {
  // hide the start-screen
  startScreen.classList.add("hide");
  // show the questionContainer
  questionContainer.classList.remove("hide");
});

// this event handler is on the choices container as when trying to set the onclick handler within the forEach logic it continuously through a reference error saying the click handler checkAnswer was not defined
choices.addEventListener("click", (e) => {
  console.log(e.target.value);
});

/* 

----------------
Global Variables
----------------

*/
// Initialise global variables
let timer = 5;
let score = 0;
const dummyScores = [
  { name: "Bob", score: 100 },
  { name: "Sarah", score: 75 },
];
localStorage.setItem("highScores", JSON.stringify(dummyScores));

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
// questionContainer.classList.remove("hide");
questionTitle.innerText = questions[0].question;
// using below means will need to tear down all content of the choices.innerHTML and start again for next loop
questions[0].options.forEach((choice) => {
  choices.innerHTML += `<button value='${choice}' id='${questions[0].id}-${choice}'>${choice}</button>`;
});

// USER STORY
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// ACCEPTANCE CRITERIA
// GIVEN I am taking a code quiz
// WHEN I click the start button
function startGame() {
  // add logic
}

// THEN a timer starts and I am presented with a question

// WHEN I answer a question
function checkAnswer(e) {
  // add logic
  // this is the onClick event handler for the choices and needs to compare the current question's correctAnswer property with the answer submitted by the user
  // use e.target.value
  console.log(e.target.value);
}

// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function subtractTime() {
  // add logic
}

function playSound(sound) {
  // add logic
  // triggers the playing of the correct or incorrect audio file based on answer
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score
function addHighScore() {
  // add logic
  // push score to an array stored in localStorage with object storing initials and score
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScores);
  //   highScores.push({ name: "Fred", score: 200 });
  //   console.log(highScores);
  //   localStorage.setItem("highScores", JSON.stringify(highScores));
}

// addHighScore();
