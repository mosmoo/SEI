/*
 * DOTS: Level Three
 *
 */

const scoreBoard = document.querySelector(".js-score");
const showWinner = document.querySelector(".level-winner");
const dots = document.querySelectorAll(".js-dot");

dots.forEach((dot) => {
  dot.addEventListener("click", handleClick);
});

let score = 0;

function handleClick(e) {
  score += parseInt(e.target.dataset.increment);

  scoreBoard.innerText = score;

  if (score >= 100) {
    showWinner.style.opacity = 100;
  }
}
