// This file will contain the logic to retrieve the high scores from localStorage

// DOM elements
const highScoresContainer = document.getElementById("highscores");
const clearHighScoresButton = document.getElementById("clear");
const noScoresText = document.getElementById("no-scores");

// Globals
const noScoresPlaceholderText = "There are no high scores yet!";

// Event handlers
clearHighScoresButton.addEventListener("click", () => {
  localStorage.clear();
  highScoresContainer.innerHTML = "";
  noScoresText.innerText = noScoresPlaceholderText;
});

// Restrieve the high scores from localStorage and parse to standard array of objects
const highScores = JSON.parse(localStorage.getItem("highScores"));

!highScores ? (noScoresText.innerText = noScoresPlaceholderText) : null;

// Sort the array in descending order based on score (destructively)
// TODO: Deal with situation where there are no scores yet - using ES6 optional chaining but could swap to include within ternary
highScores?.sort((a, b) => b.score - a.score);

highScoresContainer.innerHTML = "";
highScores?.forEach((score) => {
  highScoresContainer.innerHTML += `<li>${score.name}: ${score.score}</li>`;
});
