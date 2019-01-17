// Create computer's numerical character pool:
var randomNumber = Math.floor(Math.random() * 10) + 9;

function generateAlphabet() {
    var arr = [];
    for (var i = 19; i <= 120; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}
//GLOBAL SCOPE
// Start the game with a score of 0.
var playerScore = 0;
var wins = 0;
var losses = 0;
var number = generateNumber();
var $playerScore = document.getElementById("player-score");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
// var $guessesRemaining = document.getElementById("guesses-remaining");
console.log($alreadyGuessed);

// Randomly chooses an option from the random number array. This is the computer's generation of random number:
var randomNumber = numberPool[Math.floor(Math.random() * numberPool.length)];
var $computerPick = document.getElementById("computer-pick");
console.log("computer's pick:", computerPick);
var alreadyGuessedArr = [];

//EVENT LISTENER:
// When the player clicks on a crystal, it runs the following function:
$(".crystal").on("click", function () {
}

document.onclick = function (event) {
    guessesRemaining--;
    var playerGuess = event.key.toLowerCase();
    alreadyGuessedArr.push(playerGuess);
    console.log("player win: " + playerWin);

    // If the player matches the random number, increment the player's win variable.
    if (playerGuess === computerPick) {
        playerScore++;
        // guessesRemaining = 10;
        alreadyGuessedArr = [];
        computerPick = numberPool[Math.floor(Math.random() * numberPool.length)];
        console.log("computer's pick:", computerPick);

        // If the player exceeds the random number, increment the player's losses variable.
    } else if (guessesRemaining === 0) {
        computerScore++;
        guessesRemaining = 10;
        alreadyGuessedArr = [];
        computerPick = pool[Math.floor(Math.random() * pool.length)];
        console.log("computer's pick:", computerPick);
    }

    console.log("remaining guesses: " + guessesRemaining);

    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("already-guessed").innerHTML = alreadyGuessedArr.join(",   ");
};
