'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'yes that is correct';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 31;

document.querySelector('.guess').value = 31;
console.log(document.querySelector('.guess').value);
*/

const check = document.querySelector('.check');
const number = document.querySelector('.number');

let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let highscore = 0;

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input.
  if (!guess) {
    displaymessage('NO Number');

    //when player wins
  } else if (guess == secretnumber) {
    displaymessage('correct Number');
    //display the correct number
    number.textContent = secretnumber;
    //
    document.querySelector('body').style.backgroundColor = '#60b347';

    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? 'too High' : 'too low');

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose';
    }
  }
});
//when guess is too high
// } else if (guess > secretnumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'The number is too High';
//     score--;

//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You loose';
//   }

//   //when guess is too low
// } else if (guess < secretnumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'The number is too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You loose';
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displaymessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const modal = document.querySelector('modal');

const anish = {
  firstname: 'aashish',
  year: 1991,
  calcage: function () {
    const age = 2037 - this.year;
    return age;
  },
};
console.log(anish.calcage());
