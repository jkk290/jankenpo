let computerChoice = "";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum > 33 && randomNum <= 66) {
        computerChoice = "Rock";
    } else if (randomNum <= 33) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


function playGame() {

    let humanScore = 0;

    let computerScore = 0;

    const body = document.querySelector("body");
    const roundResult = document.createElement("div");
    const currentScore = document.createElement("div");
    const winner = document.createElement("div");

    function announceWinner () {        
        if (humanScore > computerScore) {
            winner.textContent = "Congratulations, you won the game!"
            body.append(winner);
        } else {
            winner.textContent = "The computer won the game!"
            body.append(winner);
         }        
    };

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult.textContent = "You lost the round, you had chose rock and the computer chose paper.";
            body.append(roundResult);
            computerScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            roundResult.textContent = "You lost the round, you had chose paper and the computer chose scissors.";
            body.append(roundResult);
            computerScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            roundResult.textContent = "You lost the round, you had chose scissors and the computer chose rock.";
            body.append(roundResult);
            computerScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            roundResult.textContent = "You won the round, you had chose rock and the computer chose scissors.";
            body.append(roundResult);
            humanScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            roundResult.textContent = "You won the round, you had chose paper and the computer chose rock.";
            body.append(roundResult);
            humanScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            roundResult.textContent = "You won the round, you had chose scissors and the computer chose paper.";
            body.append(roundResult);
            humanScore++;
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
            if (humanScore === 5 || computerScore === 5) {
                announceWinner();
            }
        } else {
            roundResult.textContent = "You both made the same selection.";
            currentScore.textContent = "Current score: You (" + humanScore + ") - Computer (" + computerScore + ")";
            body.append(currentScore);
        }
    }

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    body.append(rockBtn);

    rockBtn.addEventListener("click", function() {
        humanChoice = "Rock"
        getComputerChoice();
        playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());
    });

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    body.append(paperBtn);

    paperBtn.addEventListener("click", function() {
        humanChoice = "Paper"
        getComputerChoice();
        playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());
    });

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    body.append(scissorsBtn);

    scissorsBtn.addEventListener("click", function() {
        humanChoice = "Scissors"
        getComputerChoice();
        playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());
    });
}

playGame();