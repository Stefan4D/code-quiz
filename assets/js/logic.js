// This file will contain the application logic for the game including timer, button click event handling, playing associated audio for correct/incorrect and managing the overall game event loop

// import the question set
import { questions } from "./questions.js";

// console.log(questions.length);
// console.log(questions[0]);

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

// ? USER STORY
// ? AS A coding boot camp student
// ? I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// ? SO THAT I can gauge my progress compared to my peers

// ? ACCEPTANCE CRITERIA
// ? GIVEN I am taking a code quiz
// ? WHEN I click the start button
// this handles hiding the start screen and showing the questions
startButton.addEventListener("click", () => {
  // ! call the core gameplay function
  startGame();
});

// this event handler is on the choices container as when trying to set the onclick handler within the forEach logic it continuously through a reference error saying the click handler checkAnswer was not defined
// TODO: Need to fix that currently this targets the entire container and can return undefined if anything other than a button is clicked
choices.addEventListener("click", (e) => {
  // console.log(e.target.value);
  checkAnswer(e);
  // need to pass the ID of the element as well so can parse the question ID?
});

/* 

----------------
Global Variables
----------------

*/
// Initialise global variables
let timer = 10;
time.innerText = timer;
let score = 0;
let currentQuestionIndex = 0;
const dummyScores = [
  { name: "Bob", score: 100 },
  { name: "Sarah", score: 75 },
];
localStorage.setItem("highScores", JSON.stringify(dummyScores));

/* 
  ! This is the core gameplay function
  * Sets the interval on timer
  * Called by the event listener on the "Start Quiz" button
*/
function startGame() {
  // hide the start-screen
  startScreen.classList.add("hide");
  // show the questionContainer
  questionContainer.classList.remove("hide");

  // ? WHEN all questions are answered or the timer reaches 0
  // ? THEN the game is over
  // if check to see if there are any remaining questions or if timer has run out
  if (currentQuestionIndex >= questions.length || timer <= 0) {
    // if true the game is over
    clearInterval(intervalId);
    time.innerText = "Game Over!";
    endGame();
    return;
  }

  // ? THEN a timer starts and I am presented with a question
  // this interval sets the core game timer
  let intervalId = setInterval(() => {
    if (timer > 0) {
      timer -= 1;
      time.innerText = timer;
    } else {
      clearInterval(intervalId);
      time.innerText = "Game Over: Time's up!";
      endGame();
    }
  }, 1000);

  // ? THEN I am presented with another question
  displayQuestion(currentQuestionIndex);
}

function endGame() {
  // ? WHEN the game is over
  // ? THEN I can save my initials and score
  // TODO: add end game functionality
  // * end the game
  // * clear the interval
  // * display user score
  // * prompt user for initials
  // * add user score and initials to the high scores (call addHighScore())
  // TODO: add modal to prompt for user initials
  // TODO: create high score object with user initials and the score achieved
  // TODO: call addHighScore function with that object
  console.log("endGame called");
  addHighScore({ name: "TEST HIGH SCORE", score: 100 });
}

function displayQuestion(questionIndex) {
  console.log("displayQuestion called");
  console.log(`Value of currentQuestionIndex is: ${currentQuestionIndex}`);
  console.log(`Value of questionIndex is: ${questionIndex}`);
  // add question answer options to the choices div
  // example before creating gameplay loop
  // questionContainer.classList.remove("hide");
  questionTitle.innerText = questions[questionIndex].question;
  // using below means will need to tear down all content of the choices.innerHTML and start again for next loop
  // TODO: Add a custom additional class for the answers buttons to make widths match
  questions[questionIndex].options.forEach((choice) => {
    choices.innerHTML += `<button value='${choice}' id='${questions[questionIndex].id}-${choice}'>${choice}</button>`;
  });
}

// ? WHEN I answer a question
function checkAnswer(e) {
  // add logic
  // this is the onClick event handler for the choices and needs to compare the current question's correctAnswer property with the answer submitted by the user
  // use e.target.value
  console.log(`Value of e.target.value within checkAnswer: ${e.target.value}`);
  // TODO: increment currentQuestionIndex here?
}

// ? WHEN I answer a question incorrectly
// ? THEN time is subtracted from the clock
function subtractTime() {
  // add logic
}

function playSound(sound) {
  // add logic
  // triggers the playing of the correct or incorrect audio file based on answer
}

function addHighScore(newScore) {
  // add logic
  console.log(newScore);
  // push score to an array stored in localStorage with object storing initials and score
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  highScores.push(newScore);
  console.log(highScores);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}
