const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");

function computerPlay() {
  const choice = ["rock", "paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "DRAW"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `YOU WON!!! ${playerSelection} beats ${computerSelection} `
  } else {
    return `YOU LOST!!! ${computerSelection} beats ${playerSelection}`
  }
}

function updateScore(playerScore, computerScore) {
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  if (playerScore === 5) {
    resultDiv.textContent = "You are the WINNER!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore === 5) {
    resultDiv.textContent = "You are the LOSER!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("rock", computerSelection);
  resultDiv.textContent = result;
  if (result.startsWith("YOU WON!!!")) {
    playerScore++;
  } else if (result.startsWith("YOU LOST!!!")) {
    computerScore++;
  }
  updateScore(playerScore, computerScore);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("paper", computerSelection);
  resultDiv.textContent = result;
  if (result.startsWith("YOU WON!!!")) {
    playerScore++;
  } else if (result.startsWith("YOU LOST!!!")) {
    computerScore++;
  }
  updateScore(playerScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("scissors", computerSelection);
  resultDiv.textContent = result;
  if (result.startsWith("YOU WON!!!")) {
    playerScore++;
  } else if (result.startsWith("YOU LOST!!!")) {
    computerScore++;
  }
  updateScore(playerScore, computerScore);
});
