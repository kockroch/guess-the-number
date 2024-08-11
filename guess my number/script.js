let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');

submitGuess.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        restartButton.classList.remove('hidden');
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
    }

    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultMessage.textContent = '';
    restartButton.classList.add('hidden');
    guessInput.value = '';
    guessInput.focus();
}
