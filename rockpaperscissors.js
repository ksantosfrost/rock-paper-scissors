let winCount = 0, loseCount = 0, tieCount = 0;

const choices = document.querySelectorAll('.choice');
const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const overlay = document.getElementById('overlay');
const project = document.getElementById('project');
const score = document.getElementById('score');

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    const playerChoice = this.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    playerHand.style.backgroundImage = "url('imgs/rock-emoji-player.png')";
    computerHand.style.backgroundImage = "url('imgs/rock-emoji-computer.png')";
    overlay.style.visibility = 'visible';
    score.classList.add('hidden');


    playerHand.style.animation = 'none';
    computerHand.style.animation = 'none';

    // Trigger reflow to reset animation
    playerHand.offsetHeight; 
    computerHand.offsetHeight;

    playerHand.style.animation = 'playerEnter 1s forwards';
    computerHand.style.animation = 'computerEnter 1s forwards ';

    setTimeout(() => {
      playerHand.classList.add('shake');
      computerHand.classList.add('shake');
    }, 3000)
  

    setTimeout(() => {
      play(playerChoice, computerChoice);
      updateScores();
      
    }, 2000); // Adjust this duration as needed
  });
});

const restart = document.getElementById('restart-button');
restart.addEventListener('click', resetScore);

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice, computerChoice) {
  const info = {
    rock: {loss: 'paper', win: 'scissors'},
    paper: {loss: 'scissors', win: 'rock'},
    scissors: {loss: 'rock', win: 'paper'},
  };

  if (info[playerChoice].win === computerChoice) {
    ++winCount;
  } else if (info[playerChoice].loss === computerChoice) {
    ++loseCount;
  } else {
    ++tieCount;
  }
}

function updateScores() {
  document.querySelector('.score').innerHTML = `
    <p>Wins: ${winCount}</p>
    <p>Losses: ${loseCount}</p>
    <P>Ties: ${tieCount}</P>
  `;    
}

function resetScore() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;
  document.querySelector('.score').innerHTML = `
    <p>Wins: ${winCount}</p>
    <p>Losses: ${loseCount}</p>
    <P>Ties: ${tieCount}</P>
  `;   
}

