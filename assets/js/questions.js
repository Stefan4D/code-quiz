// This file will contain an array of questions including associated multiple choice answers and a flag for which is the correct answer

// export const questions = [
//   {
//     id: 1,
//     question: "Which is 1?", // string of the question
//     options: ["1", "2", "3", "4"], // multiple choice answers
//     correctAnswer: 0, // position in the options array of the correct answer
//   },
//   {
//     id: 2,
//     question: "Which is 2?", // string of the question
//     options: ["1", "2", "3", "4"], // multiple choice answers
//     correctAnswer: 1, // position in the options array of the correct answer
//   },
//   {
//     id: 3,
//     question: "Which is 3?", // string of the question
//     options: ["1", "2", "3", "4"], // multiple choice answers
//     correctAnswer: 2, // position in the options array of the correct answer
//   },
// ];

export const questions = [
  {
    id: 1,
    question:
      "What is the JavaScript syntax for printing something to the console?",
    options: ["print()", "console.print()", "console.log()", "write()"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "How would you declare a variable `num` in JavaScript?",
    options: ["int num;", "let num;", "float num;", "num declare;"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "Which of the following is the correct syntax to create an array in JavaScript?",
    options: [
      "let arr = ();",
      "let arr = [];",
      "let arr = {};",
      "let arr = <>;",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What does '===' operator check in JavaScript?",
    options: ["Equality", "Inequality", "Strict equality", "Assignment"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction() {}",
      "function myFunction {}",
      "myFunction() {}",
      "function myFunction() {}",
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "How do you call a function named `myFunction` in JavaScript?",
    options: [
      "call myFunction()",
      "myFunction()",
      "run myFunction()",
      "execute myFunction()",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What will the following code return: `typeof null;` ?",
    options: ["'null'", "'undefined'", "'object'", "'none'"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "How would you increment the variable `x` by 1 in JavaScript?",
    options: ["x++", "x + 1", "x = 1+", "x+"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Which of the following is not a reserved word in JavaScript?",
    options: ["var", "for", "let", "create"],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "How do you add a comment in JavaScript?",
    options: ["// comment", "*/ comment /*", "<!-- comment -->", "!comment"],
    correctAnswer: 0,
  },
];
