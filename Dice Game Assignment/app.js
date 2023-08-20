const diceBtn = document.getElementById('diceBtn');
const diceImg = document.getElementById('diceImg');
const scoreDisplay = document.getElementById('score')
const restart = document.getElementById('restart');

let score = 0;

diceBtn.addEventListener('click', () => {
    let diceThrow = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./Dice images/${diceThrow}.gif`;

    if(diceThrow === 1){
        score = 0;
        scoreDisplay.textContent = score;

    restart.classList.remove('restartBtn');
        diceBtn.disabled = true;
    } else {
        score += diceThrow;
        scoreDisplay.textContent = score;
        if (score >=20){
            restart.classList.remove('restartBtn');
            diceBtn.disabled = true;
        }
    }
})

const restartGame = () => {
    diceImg.src = 'Dice images/dice roll.png';
    score = 0;
    scoreDisplay.textContent = score;
    diceBtn.disabled = false;

    restart.classList.add('restartBtn')
}

diceBtn.addEventListener('click', diceBtn);
restart.addEventListener('click',restartGame);


