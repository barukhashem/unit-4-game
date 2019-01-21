// This is a game with 4 dinosaurs and a random result.
// The random result shown at the start of the game should be between 19 - 120.
// Each dinosaur should have a random unknown value between 1 - 12 (unknown until you click on it).
// Clicking any dinosaur should add to the previous result until it equals the total score.
// If it's greater than the random result, then the loss counter increments and the game restarts.
// If it's equal, then the win counter increments and the game restarts.
// A new random number should generate every time you win or lose.

// Global scope variables:
var randomNumber;
var lost = 0;
var win = 0;
var score = 0

// Setters
// Getters

var resetAndRestartGame = function () {

    // Empties the dinosaurs (deletes old element):
    $(".dinosaurs").empty();

    var images = [
        "http://blog.learningresources.com/wp-content/uploads/2017/05/Stegosaurus-Dinosaur-History-For-Kids.jpg",
        "https://static.turbosquid.com/Preview/2016/08/15__05_40_23/square1.pngCAADFB60-670E-4F7D-A482-9CF6DE52E3A8Original.jpg",
        "http://www.socialstudiesforkids.com/graphics/triceratops_right.jpg",
        "http://blog.learningresources.com/wp-content/uploads/2017/05/history-of-dinos.jpg"
    ];

    // Brings new element to DOM by generating a random number from 19 to 120:
    randomNumber = Math.floor(Math.random() * 102) + 19;

    // Displays the random number in the DOM:
    $("#result").html("Match This Random Number: " + randomNumber);

    // A "for" loop generates 4 dinosaurs:
    for (var i = 0; i < 4; i++) {

        // Every time it loops, it generates a random number for each dinosaur:
        var random = Math.floor(Math.random() * 11) + 1;

        // Creates the div for the random number, assigns attributes class:
        var dinosaur = $("<div>");
        dinosaur.attr({
            "class": "dinosaur",
            "data-random": random
        });

        dinosaur.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });

        // Puts a random number in each dinosaur on the DOM:
        $(".dinosaurs").append(dinosaur);
    }

    $("#score").html("Your Dino-Score: " + score);

}

// Page reloads and executes the function within it:
resetAndRestartGame();

// Event delegation (when page loads, the clicked button finds the old element crystal class to work with)
$(document).on("click", ".dinosaur", function () {

    // Turns the following into a number:
    var number = parseInt($(this).attr("data-random"));

    // Adds numbers:
    score += number;

    $("#score").html("Your Dino-Score: " + score);

    console.log(score);

    // If the numbers being added equal the randomly generated number, then you win and the game restarts:
    if (score === randomNumber) {

        // Increments the win tally:
        win++;

        // This is put in the DOM:
        $("#win").html("Awesome! You won: " + win);

        score = 0;

        // Then reruns the entire function:
        resetAndRestartGame();
    }

    // If the numbers being added are greater than the randomly generated number, then you lose and the game restarts:
    else if (score > randomNumber) {

        // Increments the lost tally:
        lost++;

        // This is put in the DOM:
        $("#lost").html("Rrrawrr... You lost: " + lost);

        score = 0;

        // Then reruns the entire function:
        resetAndRestartGame();
    }



});

