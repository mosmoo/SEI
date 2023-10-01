/*
 * DOTS: Level One
 *
 */
const eLdot = document.querySelector(".js-dot");
const scoreBoard = document.querySelector(".js-score");
const showWinner = document.querySelector(".level-winner");

let score = 0;

eLdot.addEventListener("click", handleClick);

function handleClick() {
  score += 10;
  scoreBoard.innerText = score;

  if (score >= 100) {
    showWinner.style.opacity = 100;
  }
}