"use strict";
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const roll = document.querySelector(".roll");
const diced = document.querySelector(".img2");
const player0ScoreEl = document.querySelector(".player-0-score");
const player1ScoreEl = document.querySelector(".player-1-score");
const active = document.querySelector(".active");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new");
const titleWinner0 = document.querySelector(".title-winner0");
const titleWinner1 = document.querySelector(".title-winner1");
const totalfunc = function() {
    currentScore = 0;
    document.querySelector(`.player-${activePlayer}-score`).textContent = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
        player1.classList.toggle("active");
        player0.classList.toggle("active");
    } else {
        activePlayer = 0;
        player1.classList.toggle("active");
        player0.classList.toggle("active");
    }
};
let totalScore, endGame, currentScore, activePlayer;
const init = function() {
    player0.classList.add("active");
    player1.classList.remove("active");
    document.querySelector(`.player0`).classList.remove("winner");
    document.querySelector(`.player0`).classList.remove("colors");
    document.querySelector(`.player1`).classList.remove("winner");
    document.querySelector(`.player1`).classList.remove("colors");
    endGame = true;
    currentScore = 0;
    totalScore = [0, 0];
    activePlayer = 0;
    document.querySelector(`.totalScore-0`).textContent = totalScore[0];
    document.querySelector(`.totalScore-1`).textContent = totalScore[1];
    titleWinner0.classList.add("hidden");
    titleWinner1.classList.add("hidden");
};
init();

roll.addEventListener("click", function() {
    if (endGame) {
        const randNum = Math.trunc(Math.random() * 6) + 1;
        diced.classList.remove("hidden");
        diced.src = `dice-${randNum}.png`;
        if (randNum !== 1) {
            currentScore += randNum;
            document.querySelector(`.player-${activePlayer}-score`).textContent =
                currentScore;
        } else {
            totalfunc();
        }
    }
});
hold.addEventListener("click", function() {
    if (endGame) {
        totalScore[activePlayer] += currentScore;
        if (totalScore[activePlayer] >= 10) {
            player1.classList.add("active");
            player0.classList.add("active");
            document.querySelector(`.player${activePlayer}`).classList.add("winner");
            document.querySelector(`.player${activePlayer}`).classList.add("colors");
            endGame = false;
            diced.classList.add("hidden");
            document
                .querySelector(`.title-winner${activePlayer}`)
                .classList.remove("hidden");
            console.log(activePlayer);
        }
        document.querySelector(`.totalScore-${activePlayer}`).textContent =
            totalScore[activePlayer];
        totalfunc();
    }
});
newGame.addEventListener("click", init);