/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Player settings
let scores, roundScore, activePlayer, gamePlaying;

// DOM
const diceDOM = document.querySelector('.dice');

const init = () => {
    // Reset values
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    diceDOM.style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
};

init();

const nextPlayer = () => {
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    document.getElementById(`current-${activePlayer}`).textContent = '0';

    activePlayer = activePlayer ? 0 : 1;
    roundScore = 0;

    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
    diceDOM.style.display = 'none';

    console.log('scores: ', scores);
};

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        diceDOM.src = `dice-${dice}.png`;
        diceDOM.style.display = 'block';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.getElementById(`current-${activePlayer}`).textContent = roundScore
        } else {
            // Next player
            nextPlayer();
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {

    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 10) {
            document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';

            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            diceDOM.style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            gamePlaying = false;

        } else {
            // Next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

