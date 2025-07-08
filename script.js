// computer pick
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)]
}

let playerScore = 0;
let computerScore = 0;

// check player won the round
function hasPlayerWonTheRound(player, computer) {
    if (player === "Rock" && computer === "Scissors"
      || player === "Paper" && computer === "Rock"
      || player === "Scissors" && computer === "Paper") {
        return true;
    }
    return false;
}

// round result
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// update scores and the round results message.
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerHTML = playerScore > computerScore ? "Player has won the game!" : "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

