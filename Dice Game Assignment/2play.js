const diceBtn = document.getElementById('diceBtn');
const diceImg = document.getElementById('diceImg');
const scoreDisplay1 = document.getElementById('scorePlay1')
const scoreDisplay2 = document.getElementById('scorePlay2')
const restart = document.getElementById('restart');
const holdPlayer1 = document.getElementById('holdPlayer1');
const holdPlayer2 = document.getElementById('holdPlayer2');


let player1Score= 0;
let player2Score= 0;
let currPlayer= 1;
let currRoll = 0;


const switchPlayer = () => {
    currPlayer === 1 ? (currPlayer = 2) : (currPlayer === 1);
    updateActivePlay()
}

const updateScoreDisplay = () => {
    if (currentPlayer === 1) {
      player1ScoreDisplay.textContent = player1Score;
    } else {
      player2ScoreDisplay.textContent = player2Score;
    }
  }

diceBtn.addEventListener('click', () => {
    let diceThrow = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./Dice images/${diceThrow}.gif`;
    currRoll = diceThrow;

    if(diceThrow === 1){
        player1Score = 0;
        scoreDisplay1.textContent = score;

    restart.classList.remove('restartBtn');
        diceBtn.switchPlayer
    } else {
        score += diceThrow;
        scoreDisplay1.textContent = score;
        if (score >=20){
            restart.classList.remove('restartBtn');
            diceBtn.disabled = true;
        }
    }
})

const restartGame = () => {
    diceImg.src = 'Dice images/dice roll.png';
    score = 0;
    scoreDisplay1.textContent = score;
    diceBtn.disabled = false;

    restart.classList.add('restartBtn')
}

diceBtn.addEventListener('click', diceBtn);
restart.addEventListener('click',restartGame);


