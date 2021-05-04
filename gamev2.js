// RPS is one of:
// - "rock"
// - "paper"
// - "scissors"
// interp. a "hand" in game of rock, paper, scissors

let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

const selections = document.createElement('p');
const score = document.createElement('p');


// Button handler
buttons.forEach((button) => {

    button.addEventListener("click", () => {
        playGame(button.value)
    });
});

// Runs game functions if not GameOver
function playGame(val) {
    if (isGameOver(playerScore, computerScore) === true) {
        alert("game is over");
    
    } else {
        let computerChoice = computerPlay();
        let playerChoice = val;
        playRound(playerChoice, computerChoice);
        updateScore(playerChoice, computerChoice);
    };
};

// Updates score after round
function updateScore(playerChoice, computerChoice) {
    selections.textContent = `You chose ${playerChoice}.
    Computer chose ${computerChoice}.`;
    score.textContent = `Player score: ${playerScore}
    Computer Score: ${computerScore}`;
    results.appendChild(selections);
    results.appendChild(score);
}

// Get random RPS value for computer
function computerPlay () {
    let val = Math.floor(Math.random() * 3);
    switch (val) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "rock";
            break;
    }
}

// Compare player and computer selections, update score
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "computerwin";
        } else {
            playerScore++;
            return "playerwin";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "playerwin";
        } else if (computerSelection === "paper") {
            return "draw";
        } else {
            computerScore++;
            return "computerwin";
        }
    } else {
        if (computerSelection === "rock") {
            computerScore++;
            return "computerwin";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "playerwin";
        } else {
            return "draw"
        }
    }
}

// Checks if either player or computer has > 5 points
function isGameOver(playerScore, computerScore) {
    if (playerScore > 4 || computerScore > 4) {
        return true;
    } else return false;
};