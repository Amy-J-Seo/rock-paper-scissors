const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });
        // computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    //    Here is where we call compare hands
                    compareHands(this.textContent, computerChoice)

                    // Update Images
                    playerHand.src = `./img/${this.textContent}.png`
                    computerHand.src = `./img/${computerChoice}.png`
                }, 2000);
                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    // Update scores
    const updateScore = () => {
        const playerS = document.querySelector('.playerScore p');
        const computerS = document.querySelector('.computerScore p');
        playerS.textContent = pScore;
        computerS.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        // update text
        // checking for a tie
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        // check for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
    };


    // is call all inner function
    startGame();
    playMatch();
    // updateScore();

}

// start the game function
game();

