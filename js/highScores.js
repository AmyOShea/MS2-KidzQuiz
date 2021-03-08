/*jshint esversion: 6 */

//-------------------------------------------------------------------------------- General Variables

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const tableBody = document.getElementById("table-body");

//-------------------------------------------------------------------------------- Displaying high scores to players

tableBody.innerHTML = highScores.map(score =>
    { return `
    <tr>
        <td>${score.name}</td>
        <td>${score.score}</td>;
    </tr>`
}).join("");


