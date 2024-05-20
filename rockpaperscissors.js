let winCount = 0, loseCount = 0, tieCount = 0;

const choices = document.querySelectorAll('.choice');
     
  choices.forEach(choice => {
    choice.addEventListener('click', function() {
      const playerChoice = this.getAttribute('data-choice');
      const computerChoice = getComputerChoice();
      play(playerChoice, computerChoice);
      updateScores();
      this.classList.add('shake');
      setTimeout(() => {
        this.classList.remove('shake');
      }, 500);
    })
  });

const restart = document.getElementById('restart-button');
restart.addEventListener('click', resetScore);



//Computer Choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}




//RPS Gameplay
function play(playerChoice, computerChoice) {
  const info = {
    Rock: {loss: 'Paper', win: 'Scissors'},
    Paper: {loss: 'Scissors', win: 'Rock'},
    Scissors: {loss: 'Rock', win: 'Paper'},
  };

  if (info[playerChoice].win === computerChoice) {
    ++winCount;
  }

  else if (info[playerChoice].loss === computerChoice) {
    ++loseCount;
  }

  else {
    ++tieCount;
  }
}

//Score Keeper
function updateScores() {
  document.querySelector('.score').innerHTML =`
  <p>Wins: ${winCount}</p>
  <p>Losses: ${loseCount}</p>
  <P>Ties: ${tieCount}</P>
  `;    
}


//Reset button
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

 
     