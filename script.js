let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const pimg = document.querySelector(".js-p-img"),
  cimg = document.querySelector(".js-c-img"),
  pmove = document.querySelector(".js-p-move"),
  cmove = document.querySelector(".js-c-move"),
  res = document.querySelector(".js-results"),
  sc = document.querySelector(".js-score");

function play() {
  let pdice = Math.floor(Math.random() * 6 + 1);
  let cdice = Math.floor(Math.random() * 6 + 1);
  pmove.textContent = `Your Dice: ${pdice}`;
  cmove.textContent = `Computer Dice: ${cdice}`;
  if (pdice > cdice) {
    score.wins++;
    res.textContent = "Results: You Won!!";
  } else if (pdice < cdice) {
    score.losses++;
    res.textContent = "Results: You Lost!!";
  } else {
    score.ties++;
    res.textContent = "Results: Tie!!";
  }
  localStorage.setItem("score", JSON.stringify(score));
  sc.textContent = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  dmove(pdice, "p");
  dmove(cdice, "c");
}

function dmove(dice, person) {
  if (person === "p") {
    if (dice === 1) {
      pimg.setAttribute("src", "public/images/p-1.png");
    } else if (dice === 2) {
      pimg.setAttribute("src", "public/images/p-2.png");
    } else if (dice === 3) {
      pimg.setAttribute("src", "public/images/p-3.png");
    } else if (dice === 4) {
      pimg.setAttribute("src", "public/images/p-4.png");
    } else if (dice === 5) {
      pimg.setAttribute("src", "public/images/p-5.png");
    } else {
      pimg.setAttribute("src", "public/images/p-6.png");
    }
  } else if (person === "c") {
    if (dice === 1) {
      cimg.setAttribute("src", "public/images/c-1.png");
    } else if (dice === 2) {
      cimg.setAttribute("src", "public/images/c-2.png");
    } else if (dice === 3) {
      cimg.setAttribute("src", "public/images/c-3.png");
    } else if (dice === 4) {
      cimg.setAttribute("src", "public/images/c-4.png");
    } else if (dice === 5) {
      cimg.setAttribute("src", "public/images/c-5.png");
    } else {
      cimg.setAttribute("src", "public/images/c-6.png");
    }
  }
}

function reset() {
  localStorage.removeItem("score");
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  res.textContent = "Score Reset!";
  pmove.textContent = "Your Dice: N/A";
  cmove.textContent = "Computer Dice: N/A";
  pimg.setAttribute("src", "public/images/question-mark.png");
  cimg.setAttribute("src", "public/images/question-mark.png");
  sc.textContent = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
