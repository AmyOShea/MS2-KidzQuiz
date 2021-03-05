//-------------------------------------------------------------------------------- General Variables

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("ans-choice"));
const correctAnsBonus = 1;
const maxQuestions = 3; //Keeping at 3 for tesiting functionality, will be changed to 10 later.

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = [];

//----------------------------------------------------------------- Temporary questions for tesiting functionality, will be removed later.
let questions = [
    {
      "question": "How many legs does a spider have?",
      correct: 2,
      ans1: 6,
      ans2: 8,
      ans3: 10
    },
    {
      question: "What gas do we breathe to stay alive?",
      correct: 1,
      ans1: "Oxygen",
      ans2: "Argon",
      ans3: "Nitrogen"
    },
    {
      question: "What is the largest country in the world?",
      correct: 1,
      ans1: "Russia",
      ans2: "Italy",
      ans3: "Australia"
    }
];


//-------------------------------------------------------------------------------- Start Game

//-------------------------------------------------------------------------------- End Game

//-------------------------------------------------------------------------------- High Scores