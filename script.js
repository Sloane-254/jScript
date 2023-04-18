'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let gameIsRunning = false;

document.querySelector('.check').addEventListener('click', function () {
  let inValue = Number(document.querySelector('.guess').value);
  //   console.log(typeof inValue);

  if (!inValue || inValue > 20) {
    document.querySelector('.message').textContent = '⛔ INvalid Choice!';
  } else if (secretNumber === inValue) {
    document.querySelector('.message').textContent = '🎉 You Win!';
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = inValue;
    gameIsRunning = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== inValue) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        inValue < secretNumber ? '📉 Too Low!' : '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Loose!';
      document.querySelector('.score').textContent = 0;
      gameIsRunning = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (gameIsRunning) {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    gameIsRunning = false;
  }
});
