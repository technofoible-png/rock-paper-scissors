// RPS is one of:
// - "rock"
// - "paper"
// - "scissors"

// Number -> RPS
// produces a random RPS value

let playerScore = 0
let computerScore = 0

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

// RPS RPS -> String
// compares two RPS values and determines winner, updates score
function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "You lose!";
        } else {
            playerScore++;
            return "You win!";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You win!";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            computerScore++;
            return "You lose!";
        }
    } else {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lose!";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You win!";
        } else {
            return "Draw!"
        }
    }
}

// runs a 5 round game of RPS using player and computer inputs
function game() {
    for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Rock, paper, scissors?");
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        console.log(`You chose: ${playerSelection} Computer chose: ${computerSelection}`);
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
        console.log(winner);
    }
    
    if (playerScore > computerScore) {
        return console.log("You won!");
    } else if (playerScore < computerScore) {
        return console.log("You lost!") 
    } else {
        return console.log("Game is over.")
    }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

const selections = document.createElement('p');
const score = document.createElement('p');

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        let computerSelection = computerPlay();
        playRound(button.value, computerSelection);
        
        selections.textContent = `You chose ${button.value}.
        Computer chose ${computerSelection}.`;
        score.textContent = `Player score: ${playerScore}
        Computer Score: ${computerScore}`;
        results.appendChild(selections);
        results.appendChild(score);
    });
});



