// RPS is one of:
// - "Rock"
// - "Paper"
// - "Scissors"

// Number -> RPS
// produces a random RPS value 
let val = Math.floor(Math.random() * 3);

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

function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock") {
        if (computerSelection === "rock") {
            return "Draw! Both chose Rock.";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "paper") {
            return "Draw! Both chose Paper.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper.";
        } else {
            return "Draw! Both chose Scissors."
        }
    }
}