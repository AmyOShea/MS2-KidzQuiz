/*jshint esversion: 6 */

//-------------------------------------------------------------------------------- General Variables

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("ans-choice"));
const correctAnsBonus = 1;
const maxQuestions = 10;
const questionCounterDisplay = document.getElementById("question-counter");
const currentScoreDisplay = document.getElementById("current-score");
const game = document.getElementById("game-play");
const loader = document.getElementById("loader");

let availableQuestions = [];
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = [];

//-------------------------------------------------------------------------------- Questions

let questions = [];

        //Calling questions stored in db.json
fetch("db.json")
.then( res => {
    return res.json();
})
        //Setting pulled data into questions array
.then(loadedQuesitons => {
    questions = loadedQuesitons;

    loader.classList.add("hidden");
    game.classList.remove("hidden");


        //Game starts AFTER questions are loaded
    startGame();
});





//--------------------------------------------------------------------------------  Game Play

function startGame () {
    availableQuestions = [...questions];
    getNewQuestion();
}


function getNewQuestion() {
        //Setting maximum questions to 3(will change to 10 later in development)
    if (questionCounter >= maxQuestions) {

        //Save most recent score to local storage
        localStorage.setItem("recentScore", score);

        //Redirect to end game page if no more questions to ask
        return window.location.assign("/end-game.html");
    }
        //Question counter for HUD incrementing 
    questionCounter++;
    questionCounterDisplay.innerText = `Question ${questionCounter}`;


        //Randomizes order of questions and display them in game
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

        //Display all answer choices in game
    choices.forEach( choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['ans' + number];
    });
        
        //Removes used question from question pool
    availableQuestions.splice(questionIndex, 1);

        //Allow user to answer
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;

        //To compare selected answer number to correct answer number
        const selectedAnswer = selectedChoice.dataset.number;

        //Defining correct/incorrect to user choice  
        const selectedChoiceClass = selectedAnswer == currentQuestion.correct ? "correct" : "incorrect";

        if (selectedChoiceClass === "correct") {
            updateCurrentScore(correctAnsBonus);
        }

        //Add correct/incorrect class to user choice
        selectedChoice.classList.add(selectedChoiceClass);


        //Remove correct/incorrect class to user choice before new question diplayed
        setTimeout(() => {
            selectedChoice.classList.remove(selectedChoiceClass);
            getNewQuestion(); 
        }, 1000);
    });
});

function updateCurrentScore(num) {
    score += num;
    currentScoreDisplay.innerText = `Score: ${score}`;
}

