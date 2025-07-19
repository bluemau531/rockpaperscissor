console.log("Hello");

// Prompt Human Choice
let humanChoice = prompt(" Rock, Paper, Scissors?");
// Randomizes the Computer Choice ("Rock, Paper, Scissor")
let computerChoice = randomizeComputerChoice();

// Case Sensitive Parameters
playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());


function randomizeComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*3);
    return choice[randomIndex];
}

function playRound(x, y){
    
    // Tie between Player and Computer
    if (x==y){
        console.log("Tie. ");
    }
        // Player Wins
        else if ((x == "rock" && y == "scissors") ||
                (x == "paper" && y == "rock") ||
                (x == "scissors" && y == "paper"))
            {
                console.log(" You win.");
            }
        // Computer Wins
        else {
            console.log(" You lose.")
        }
}

