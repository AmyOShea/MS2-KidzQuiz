//-------------------------------------------------------------------------------- General Variables

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("ans-choice"));
const correctAnsBonus = 1;
const maxQuestions = 3; //Keeping at 3 for tesiting functionality, will be changed to 10 later.

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = [];

//----------------------------------------------------------------- Temporary questions for tesiting functionality, will be removed later.
let questions = [
    {
      question: "How many legs does a spider have?",
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

function startGame () {
    availableQuestions = [...questions];
    getNewQuestion();
}


function getNewQuestion() {
        //Checking that there are still available questions (temporary rule for testing functionality)
    if (availableQuestions.length === 0) {

        //Redirect to end game page if no more questions to ask
        return window.location.assign("/end-game.html");
    }

        //Randomizes order of questions and display them in game
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

        //Display all answer choices in game
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['ans' + number];
    });
        
        //Removes used question from question pool
    availableQuestions.splice(questionIndex, 1);

        //Allow user to answer
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;

        //To compare selected answer number to correct answer number
        const selectedAnswer = selectedChoice.dataset["number"];

        //Defining correct/incorrect to user choice  
        const selectedChoiceClass = selectedAnswer == currentQuestion.correct ? "correct" : "incorrect";

        //Add correct/incorrect class to user choice
        selectedChoice.classList.add(selectedChoiceClass)


        //Remove correct/incorrect class to user choice before new question diplayed
        setTimeout(() => {
            selectedChoice.classList.remove(selectedChoiceClass);
            getNewQuestion(); 
        }, 1000);
    });
});

startGame();

//-------------------------------------------------------------------------------- End Game

//-------------------------------------------------------------------------------- High Scores


