/*jshint esversion: 6 */

//-------------------------------------------------------------------------------- General Variables

const username = document.getElementById("username");
const saveBtn = document.getElementById("save-high-score")
const endScore = document.getElementById("end-score");
const recentScore = localStorage.getItem("recentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


    //Display final score to user
endScore.innerText = `Final Score: ${recentScore}`;


//----------------------------------------------------------------- Save High Score

saveHighScore = (event) => {
    console.log("clicked");

        // Prevent form reload when save button clicked
    event.preventDefault();

        //Create key values for score
    const score = {
        score: score,
        name: username.value
    };

        //Add score to highscores array
    highScores.push(score);

        //Organize scores highest to lowest
    highScores.sort((a,b) => b.score - a.score);

        //Set max saved scores to 5
    highScores.splice(5);

        //Update & save highscores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

        //Redirect to high scores page once submitted
    return window.location.assign("high-scores.html");

};