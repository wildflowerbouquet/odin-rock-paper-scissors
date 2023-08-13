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

    const choice = (Math.floor(Math.random()*(max-min+1)+min));

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

console.log(getComputerChoice());