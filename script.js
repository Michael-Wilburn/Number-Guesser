// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 11);
}

function getAbsoluteDistance(a,b){
  return Math.abs(a - b);
}

function compareGuesses(human,computer,target){
let humanDif = getAbsoluteDistance(target,human);
let computerDif = getAbsoluteDistance(target,computer);
  if(humanDif < computerDif || humanDif === computerDif){
    return true;
  } else {
    return false
  }
}

function updateScore(str){
  if(str === 'human'){
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber ++;
}

