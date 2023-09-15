/* PSUEDOCODE

When a user inputs "Rock", "Paper", or "Scissors"
The computer randomly returns "Rock", "Paper", or "Scissors"
Print the user's input and the computer's return.
If the user's input beats the computer's return, print "You win! + results".
If the computer's return beats the user's in put, the comptuer "You lose! + results".
Keep track of winner and lose for five rounds.
Print overall winner.


*/



function getComputerChoice() {
    const min = 1;
    const max = 3;

    let x = (Math.floor(Math.random()*(max-min+1)+min));

    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else if (x === 3) {
        return "scissors";
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors?");
;
let computerSelection = getComputerChoice();

function playRound() {
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "You both chose Rock. It's a tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "You both chose Paper. It's a tie!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "You both chose Scissors. It's a tie!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
    }

}    

let result = playRound(); 

function score() { 
    if (result.charAt(4) === "w") {
       return 1;
    } else if (result.charAt(4) === "l") {
        return -1;
    } else {
       return 0;
    }
}

let round1 = score();

let round2 = score() + round1;

let round3 = score() + round2;

let round4 = score() + round3;

let round5 = score() + round4;

let total = round5;
    
function game() {

    prompt("Rock, Paper, or Scissors?");

    playRound();
    console.log(result);
    console.log(round1);

    prompt("Rock, Paper, or Scissors?");

    playRound();
    console.log(result);
    console.log(round2);
    
    prompt("Rock, Paper, or Scissors?");

    playRound();
    console.log(result);
    console.log(round3);

    prompt("Rock, Paper, or Scissors?");

    playRound();
    console.log(result);
    console.log(round4);

    prompt("Rock, Paper, or Scissors?");

    playRound();
    console.log(result);
    console.log(round5);

    console.log(total);
}

game();