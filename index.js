// TypeScript file: guessNumberGame.ts
var _a;
// Add event listener for the form submission
(_a = document.getElementById("guessForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var userGuessedNumber = parseInt(document.getElementById("userInput").value);
    var randomnumber = Math.floor(Math.random() * 10 + 1);
    var resultElement = document.getElementById("result");
    if (userGuessedNumber === randomnumber) {
        resultElement.innerHTML = "Congrats! You guessed the right number: ".concat(randomnumber);
        resultElement.style.color = "green";
    }
    else {
        resultElement.innerHTML = "You guessed wrong. The correct number was: ".concat(randomnumber);
        resultElement.style.color = "red";
    }
});
