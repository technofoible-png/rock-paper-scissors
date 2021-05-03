// RPS is one of:
// - "Rock"
// - "Paper"
// - "Scissors"

// Number -> RPS
// produces a random RPS value 

function computerPlay (val) {
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
// compares two RPS values and determines winner
function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            return "You lose!";
        } else {
            return "You win!";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "rock") {
            return "You win!";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            return "You lose!";
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose!";
        } else if (computerSelection === "paper") {
            return "You win!";
        } else {
            return "Draw!"
        }
    }
}

// runs a 5 round game of RPS using player and computer inputs
function game() {
        let playerSelection = prompt("Rock, paper, scissors?");
        let val = Math.floor(Math.random() * 3);
        let computerSelection = computerPlay(val);
        let winner = playRound(playerSelection, computerSelection);
        return console.log(`You chose: ${playerSelection} Computer chose: ${computerSelection} ${winner}`);
}