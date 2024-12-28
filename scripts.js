// Randomly determine which choice the computer will have
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice > 33 && computerChoice <= 66) {
        return "Rock"
    } else if (computerChoice <= 33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Get the choice from the player
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Rock, paper, or Scissors");
    return humanChoice;
}
console.log(getHumanChoice());
// Store and track the players score
let humanScore = 0;

// Store and track the computers score
let computerScore = 0;

// Store and track rounds
// Compare the players choice to computers choice
// If player choice wins, increment player score
// If computer choice wins, increment computer score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost, you had chose rock and the computer chose paper.");
        computerScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost, you had chose paper and the computer chose scissors.");
        computerScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost, you had chose scissors and the computer chose rock.");
        computerScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won, you had chose rock and the computer chose scissors.");
        humanScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won, you had chose paper and the computer chose rock.");
        humanScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won, you had chose scissors and the computer chose paper.");
        humanScore++;
        console.log("Current score: You (" + humanScore + ") - Computer (" + computerScore + ")" );
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection.toLowerCase(),computerSelection.toLowerCase());

// If player choice equals computer choice, re-select computer choice and get new choice from player
// Repeat comparing steps until winner
// Increase round by 1 after each win
// Replay game until 5 rounds complete
// Announce overall winner after 5 rounds