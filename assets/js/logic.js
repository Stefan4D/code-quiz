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
const highScoreSubmitButton = document.getElementById("submit-high-score");
const playerInitials = document.getElementById("initials");

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
// ! URGENT
// ! urgently need to fix this!
// ! URGENT
// ? resolved?
// TODO: Need to fix that currently this targets the entire container and can return undefined if anything other than a button is clicked
choices.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    checkAnswer(e);
  }
});

// this event handler adds the user's high score by calling addHighScore
highScoreSubmitButton.addEventListener("click", () => {
  addHighScore({ name: playerInitials.value, score: score });
});

/* 

----------------
Global Variables
----------------

*/
// Initialise global variables
let timer = 30;
time.innerText = timer;
let intervalId;
let score = 0;
let wrongAnswerTimeForfeit = 5;
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
  if (timer <= 0) {
    // if true the game is over
    clearInterval(intervalId);
    time.innerText = "Game Over!";
    endGame();
    return;
  }

  // ? THEN a timer starts and I am presented with a question
  // this interval sets the core game timer
  intervalId = setInterval(() => {
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
  // TODO: endGame needs to hide the questions so user cannot continue answering more questions after timer runs out
  // TODO: add modal to prompt for user initials
  // TODO: create high score object with user initials and the score achieved
  // TODO: call addHighScore function with that object

  // hide the questionContainer
  questionContainer.classList.add("hide");
  // show the endScreen
  endScreen.classList.remove("hide");

  // display the user's score
  finalScore.innerText = score;

  console.log("endGame called");
  // addHighScore({ name: "TEST HIGH SCORE", score: score });
}

function displayQuestion(questionIndex) {
  if (currentQuestionIndex >= questions.length) {
    // if true the game is over
    // ! Moved intervalId to be declated in global scope and then set in the playGame function so it can be accessed here
    clearInterval(intervalId);
    // ? Should I change this text to something else or hide it in this scenario?
    time.innerText = "Game Over!";
    endGame();
    return;
  }

  console.log("displayQuestion called");
  console.log(`Value of currentQuestionIndex is: ${currentQuestionIndex}`);
  console.log(`Value of questionIndex is: ${questionIndex}`);

  // add question to the questionTitle heading
  questionTitle.innerText = questions[questionIndex].question;

  // add question answer options to the choices div
  // using below means will need to tear down all content of the choices.innerHTML and start again for next loop
  // TODO: Add a custom additional class for the answers buttons to make widths match - temporary value of 250px in CSS
  // TODO: See if there is a better method to remove existing HTML before adding new button options
  // reset innerHTML first so that when moving from first question to next, it does not add a bunch of extra buttons
  choices.innerHTML = "";
  questions[questionIndex].options.forEach((choice, index) => {
    choices.innerHTML += `<button value='${index}' id='${questions[questionIndex].id}-${index}'>${choice}</button>`;
  });
}

// ? WHEN I answer a question
function checkAnswer(e) {
  // add logic
  // TODO: Consider design for function:
  // * Should function immediately go to next question?
  // * How is user informed if they got it right or wrong?
  // * How to play correct or incorrect audio?
  // * Does user need to click a button to progress to the next question?
  // ! If the user does click a button to progress to the next question then how to avoid creating a duplicate intervalId in the game?

  // this is the onClick event handler for the choices and needs to compare the current question's correctAnswer property with the answer submitted by the user
  // use e.target.value
  console.log(`Value of e.target.value within checkAnswer: ${e.target.value}`);

  // TODO: write function logic
  // ! have to convert correctAnswer to a string because e.target.value is a string
  if (
    questions[currentQuestionIndex].correctAnswer.toString() === e.target.value
  ) {
    score += 10;
    console.log(score);
  } else {
    // TODO: Need to make it visible to the user that they got the answer wrong and time has been deducted
    // * Could use a temporary floating div/span in the top right hand corner that fades out showing a "-5" next to or below the timer - value would be configured based on time forfeit variable
    subtractTime();
  }

  // TODO: increment currentQuestionIndex here?
  currentQuestionIndex++;

  // ! below is a hack just to test progression
  // ! once complete all the questions then this creates an error as there are no questions left so need to check the index against the array length, which is currently done in main loop and not here
  displayQuestion(currentQuestionIndex);
}

// ? WHEN I answer a question incorrectly
// ? THEN time is subtracted from the clock
// ? possibly rename function to 'penalise'
// TODO: Create new div DOM element containing the -5 floating beneath the timer
// TODO: Make the div fade out
// TODO: div has a unique ID so that multiple penalties could in theory show on screen at the same time
// TODO: div should float downwards away from the timer as it fades out
// ? This idea makes me think whether could have another function that adds time to the timer when the answer is correct and has the inverse: a +5 to the timer and a green text div floating upward
// ? Would need to think about how to remove div elements if too many on screen at one time i.e. multiple penalties and time bonuses on screen at same time in same part of the UI
function subtractTime() {
  // add logic
  // subtract 5 seconds from the timer
  timer -= wrongAnswerTimeForfeit;
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
