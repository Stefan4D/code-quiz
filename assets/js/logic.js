// This file will contain the application logic for the game including timer, button click event handling, playing associated audio for correct/incorrect and managing the overall game event loop

// import the question set
import { questions } from "./questions.js";

console.log(questions.length);
console.log(questions[0]);

// grab the DOM elements
const time = document.getElementById("time");
const questionContainer = document.getElementById("questions"); // to allow to set the style from hide to visible
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");

const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
