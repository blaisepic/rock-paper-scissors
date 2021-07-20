function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) return'rock';
    if(randomNumber == 1) return 'paper';
    if(randomNumber == 2) return 'scissors';
}

let playerSelection = function(input) {
    const lowerCaseInput = input.toLowerCase();
    return lowerCaseInput;
};

function playRound(computer) {
    if(computerScore === 3 || playerScore === 3) return;

    if(rock.classList.contains("currentBTN")){} player = 'rock';
    if(paper.classList.contains("currentBTN")) player = 'paper';
    if(scissors.classList.contains("currentBTN")) player = 'scissors';

    console.log(player);
    console.log(computer);

    let playerBTN = document.querySelector(`#${player}`);
    playerBTN.classList.remove('currentBTN');

    if(player == 'rock'){
        if(computer == 'rock'){
            tieScore = tieScore + 1;
            tieScoreElement.textContent = tieScore;
        }
        else if(computer == 'paper'){
            computerScore = computerScore + 1;
            computerScoreElement.textContent = computerScore;
        }
        else if(computer == 'scissors'){
            playerScore = playerScore + 1;
            playerScoreElement.textContent = playerScore;
        }
    }
    if(player == 'paper'){
        if(computer == 'rock'){
            playerScoreElement.textContent = ++playerScore;
        }
        else if(computer == 'paper'){
            tieScoreElement.textContent = ++tieScore;
        }
        else if(computer == 'scissors'){
            computerScoreElement.textContent = ++computerScore;
        }
    }
    if(player == 'scissors'){
        if(computer == 'rock'){
            computerScoreElement.textContent = ++computerScore;
        }
        else if(computer == 'paper'){
            playerScoreElement.textContent = ++playerScore;
        }
        else if(computer == 'scissors'){
            tieScoreElement.textContent = ++tieScore;
        }
    }

    checkGame();
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let input = window.prompt('Type out your choice of: rock, paper, scissors');
        let result = playRound(playerSelection(input), computerPlay());
        if(result.includes("win")){
            console.log(`Player score: ${++playerScore}. Computer score: ${computerScore}`);
        }
        else if(result.includes("loser")){
            console.log(`Player score: ${playerScore}. Computer score: ${++computerScore}`);
        }
        else if(result.includes("tie")){
            console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
        }
    }

    if(playerScore > computerScore){
        console.log('you won dweeb!');
    }
    else if(playerScore < computerScore){
        console.log('you lost hahahaha!!');
    }
    else {
        console.log('you two tied! Boring!');
    }
}

function checkGame() {
    if(playerScoreElement.textContent == 3){
        playBTN.innerHTML = "<strong>You win! Resetting now...</strong>";
        setTimeout(function(){ reset(); }, 3500);
    }
    else if(computerScoreElement.textContent == 3){
        playBTN.innerHTML = "<strong>You lose! Resetting now...</strong>";
        setTimeout(function(){ reset(); }, 3500);
    } 
}

let playerScore = 0, computerScore = 0, tieScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playBTN = document.querySelector("#playRound");

//if selected
rock.addEventListener('click', () => transition(rock));
paper.addEventListener('click', () => transition(paper));
scissors.addEventListener('click', () => transition(scissors));

//playRound
playBTN.addEventListener('click', () => playRound(computerPlay()));

let playerScoreElement = document.createElement('score');
playerScoreElement.textContent = playerScore;

let computerScoreElement = document.createElement('score');
computerScoreElement.textContent = computerScore;

let tieScoreElement = document.createElement('score');
tieScoreElement.textContent = tieScore;

let scoreFlex = document.querySelector("#scores");

scoreFlex.appendChild(playerScoreElement);
scoreFlex.appendChild(tieScoreElement);
scoreFlex.appendChild(computerScoreElement);

function transition(current) {
    if(current.classList.contains('currentBTN')){
        current.classList.remove('currentBTN');
        return;
    }
    //if any other buttons in transition state, end them
    rock.classList.remove('currentBTN');
    paper.classList.remove('currentBTN');
    scissors.classList.remove('currentBTN');

    //put current button in transition state
    current.classList.add('currentBTN');
}

function reset() {
    playBTN.innerHTML = "<strong>Play a Round</strong>";
    playerScore = 0, tieScore=0, computerScore=0;
    playerScoreElement.textContent = playerScore;
    tieScoreElement.textContent = tieScore;
    computerScoreElement.textContent = computerScore;
}



