/*jshint esversion: 6 */

//-------------------------------------------------------------------------------- General Variables

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-high-score");
const recentScore = localStorage.getItem("recentScore");
const endScore = document.getElementById("end-score")


//----------------------------------------------------------------- Save/Display high scores


    //Display final score to user
endScore.innerText = `Final Score: ${recentScore}`;



//----------------------------------------------------------------- High Score Button Event

function saveHighScore(event) {
        // Prevent form reload
    event.preventDefault();
}


