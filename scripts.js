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
console.log(getComputerChoice())

// Get the choice from the player
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Rock, paper, or Scissors");
    return humanChoice;
}
console.log(getHumanChoice());
// Store and track the players score
// Store and track the computers score
// store and track rounds
// Compare the players choice to computers choice
// If player choice wins, increment player score
// If computer choice wins, increment computer score
// If player choice equals computer choice, re-select computer choice and get new choice from player
// Repeat comparing steps until winner
// Increase round by 1 after each win
// Replay game until 5 rounds complete
// Announce overall winner after 5 rounds