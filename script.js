let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);

}


function compareGuesses (humanGuess, computerGuess, targetNumber) {
    const humanDiff = Math.abs(targetNumber - humanGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);
  
    return humanDiff <= computerDiff;
  }




function updateScore(winner) {
  if (winner === 'human') {
    humanScore++; // increment human score by 1
  } else if (winner === 'computer') {
    computerScore++; // increment computer score by 1
  }
}


function advanceRound() {
  currentRoundNumber++;
}
