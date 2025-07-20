// Reference IDs from HTML
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

// Rounds and Points
let rounds = 1;
let player1 = 0;
let player2 = 0;

// One-time setup of event listeners
rockButton.addEventListener("click", () => handleChoice("rock"));
paperButton.addEventListener("click", () => handleChoice("paper"));
scissorButton.addEventListener("click", () => handleChoice("scissors"));

function handleChoice(playerChoice) {
    if (rounds > 5) {
        alert("Game Over");
        return;
    }

    alert("Round " + rounds);

    const computerChoice = randomizeComputerChoice(); // Get new random each round
    playRound(playerChoice, computerChoice.toLowerCase());

    rounds++; // Move to the next round

    if (rounds > 5) {
        alert("Final Score:\nPlayer 1: " + player1 + "\nPlayer 2: " + player2);
    }
}

function pointTracker(winnerIsPlayer) {
    if (winnerIsPlayer === true) {
        player1++;
    } else if (winnerIsPlayer === false) {
        player2++;
    }
    alert("Score:\nPlayer 1: " + player1 + "\nPlayer 2: " + player2);
}

function playRound(player, computer) {
    let result = null;

    if (player === computer) {
        result = null;
        alert("It's a tie!");
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        result = true;
        alert("You win!");
    } else {
        result = false;
        alert("You lose!");
    }

    pointTracker(result);
}

function randomizeComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const selected = choice[randomIndex];
    alert("Computer chose: " + selected);
    return selected;
}
