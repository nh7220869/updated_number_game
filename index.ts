// TypeScript file: guessNumberGame.ts

// Add event listener for the form submission
document.getElementById("guessForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const userGuessedNumber = parseInt((<HTMLInputElement>document.getElementById("userInput")).value);
    const randomnumber = Math.floor(Math.random() * 100 + 1);
    const resultElement = document.getElementById("result");

    if (userGuessedNumber === randomnumber) {
        resultElement!.innerHTML = `Congrats! You guessed the right number: ${randomnumber}`;
        resultElement!.style.color = "green";
    } else {
        resultElement!.innerHTML = `You guessed wrong. The correct number was: ${randomnumber}`;
        resultElement!.style.color = "red";
    }
});
