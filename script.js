'use strict';

let number = Math.trunc(Math.random() * 50) + 1;
let highScore = 0;
let score = 50;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number to check!';

  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Yay! Correct Number. 🥳';
    document.querySelector('body').style.backgroundColor = '#2bcb63';
    document.querySelector(".number").style.width = '40rem';
    document.querySelector('.number').textContent = number;

    if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess !== number) {
    if(score > 1){
        document.querySelector('.message').textContent = guess > number ? 'Too high 😮‍💨' : 'Too low buddy...';
        score--;
        document.querySelector('.score').textContent = score;

    }else{
        document.querySelector('.message').textContent = "You should play barbie doll games only!";
        document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click', function(){
    score = 50;
    number = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = 50;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector(".number").style.width = '15rem';
});
