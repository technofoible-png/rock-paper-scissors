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
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Rock";
            break;
    }
    
}