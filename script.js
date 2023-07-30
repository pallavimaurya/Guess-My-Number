'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ="😍 correct number";

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = '13';
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random()*20)+1;
let score= 20;
let highscore =0;

const displayMessage = function(message){
    document.querySelector('.message').textContent =message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        displayMessage("📢 No Number");
    }
    else if(guess === secretNumber){
        displayMessage("🎉Correct Number");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

    }

    // refactoring below code ------------------------------------------------------------------------
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage( guess> secretNumber ? "📈 Too High" : "📉 Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage("🎇 You lost the game");
             document.querySelector('.score').textContent = 0;
        }
    }





    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent ="📈 Too High";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent ="🎇 You lost the game";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(guess < secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent ="📉 Too Low";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent ="🎇 You lost the game";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score= 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})





