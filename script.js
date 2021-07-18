function computerPlay() {
    let randomNumber = Math.random();
    let result = "";

    if(randomNumber <= .33){
        result = "rock";
    }
    else if(randomNumber <= .66){
        result = "paper";
    }

    else {
        result = "scissors";
    }

    return result;
}

let playerSelection = function(input) {
    const lowerCaseInput = input.toLowerCase();
    return lowerCaseInput;
};

function playRound(player, computer) {
    let result = "";
    if(player == 'rock'){
        if(computer == 'rock'){
            result = "tie";
        }
        else if(computer == 'paper'){
            result = "You loser! Paper beats rock!!"
        }
        else if(computer == 'scissors'){
            result = "You win."
        }
    }
    if(player == 'paper'){
        if(computer == 'rock'){
            result = "You win."
        }
        else if(computer == 'paper'){
            result = "tie";
        }
        else if(computer == 'scissors'){
            result = "You loser! Scissors beats paper!!"
        }
    }
    if(player == 'scissors'){
        if(computer == 'rock'){
            result = "You loser! Rock beats scissors!!"
        }
        else if(computer == 'paper'){
            result = "You win."
        }
        else if(computer == 'scissors'){
            result = "tie";
        }
    }

    return result;
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

game();