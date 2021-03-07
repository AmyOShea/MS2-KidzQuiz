/*jshint esversion: 6 */

//-------------------------------------------------------------------------------- General Variables

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-high-score");
const recentScore = localStorage.getItem("recentScore");
const endScore = document.getElementById("end-score")
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];



//----------------------------------------------------------------- Save/Display high scores


    //Display final score to user
endScore.innerText = `Final Score: ${recentScore}`;


function saveHighScore(event) {
        // Prevent form reload when save button clicked
    event.preventDefault();

        //Create key values for score
    const score = {
        score: recentScore,
        name: username.value
    };
        //Add score to highscores array
    highScores.push(score);

        //Set max saved scores to 2 (keeping at 2 for testing, wil be changed later)
    highScores.splice(2);

        //Update highscores as a string
    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(highScores);
};


