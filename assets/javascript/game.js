// This is a game with 4 crystals and a random result.
// The random result shown at the start of the game should be between 19 - 120.
// Each crystal should have a random unknown value between 1 - 12 (unknown until you click on it).
// Clicking any crystal should add to the previous result until it equals the total score.
// If it's greater than the random result, then the loss counter decrements and the game restarts.
// If it's equal, then the win counter increments and the game restarts.
// A new random number should generate every time you win or lose.

// Global scope variables:
var randomResult;
var loss;
var win;

// Setters
// Getters

randomResult = Math.floor(Math.random() * 102) + 19;

$("#result").html("Random Result: " + randomResult);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random
    });

    $(".crystals").append(crystal);

}

$(".crystal").on("click", function () {

    console.log($(this).attr("data-random"));

});

