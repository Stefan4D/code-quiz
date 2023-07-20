// This file will contain the logic to retrieve the high scores from localStorage

// Restrieve the high scores from localStorage and parse to standard array of objects
const highScores = JSON.parse(localStorage.getItem("highScores"));
// Sort the array in descending order based on score (destructively)
highScores.sort((a, b) => b.score - a.score);
