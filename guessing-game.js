function guessingGame() {
    let targetNum = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let alreadyWon = false;
    return function game(guess) {
        guessCount++;
        if (guess < targetNum) return `${guess} is too low!`;
        if (guess > targetNum) return `${guess} is too high!`;
        if (guess === targetNum) {
            if (!alreadyWon) {
                alreadyWon = true;
                return `You win! You found ${targetNum} in ${guessCount} guesses.`;
            }
            return 'The game is over, you already won!'
        }
    }
}

module.exports = { guessingGame };
