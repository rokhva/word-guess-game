// Psuedo Code-------------------------------------------------------------------

// Set up: when the user presses a key the game starts
// Guessed letters will = 0
// Guesses = chosen word length + 5
// On key press: the computer randomly picks a word from the array
// the blank spaces will update to reflect the number of letters in the word
// User will make a guess
// if the guess is corret the letter will so up in the right place
// if the guess is wrong it will be recorded under the "guessedLetters" && the guesses score will decrease by one
//then user will make another guess
// when they user runs out of guesses then
// they lose the round
// number of losses will increase by one
// game will reset
//If the user guesses correctly
// then the wins will increase by one
// game will reset

// -----------------------------------------------------------------------------


// array that the computer will pull from
var words = ["black", "chai", "green", "matcha", "sencha", "oolong", "puerh", "white", "herbal", "yellow", "fermented", "rooibos", "hibiscus", "earlgrey"]

var guessedLetters = [];
var chosenWord = "";
var guessesRemaining = 0;
var wins = 0;
var losses = 0;
var chosenWordHidden = [];
var char = [];

// var guesses = chosenWord.length + 5;

// chooses a random word
function setup() {
    chosenWord = words[Math.floor(Math.random() * words.length - 1) + 1];
    console.log(chosenWord);
    char = chosenWord.split("");
    console.log(char);


    for (var i = 0; i < char.length; i++) {
        // chosenWordHidden[i] = "_";
        chosenWordHidden.push("_");
    }
    console.log(chosenWordHidden);

    //sets guesses and guessed letters to 0
    guessedLetters = [];
    guessesRemaining = 10;


    //show on screen
    // updateScreen();

};

//to keep track of how many letters are left to be guessed
// var remainingLetters = chosenWord.length;

setup();

//track the keys the user presses
document.onkeyup = function (event) { 

    var userGuess = event.key;
    console.log(userGuess);

    checkLetter(userGuess);

}
//will run everytime the user hits a key
function checkLetter(userGuess) {

    //checking to see if the letter hit is within the randomly chosen word
    if (userGuess) {
        for (var j = 0; j < char.length; j++) {

            if (char[j] === userGuess) {
                //the letter will show up in it's correct postion in the chosenHiddenWord array
                var letterReplace = userGuess;
                // char[j] = userGuess;
                // console.log(char[j]);
                // var test = char.splice(char[j], 1, letterReplace);
                // console.log(test)

                chosenWordHidden.splice( j, 1, letterReplace);
                console.log(chosenWordHidden);
                
                // chosenWordHidden
                // chosenWordHidden.splice();
                
                
                //if it is in the word then the score will increase by one 
                
                updateScreen();

                //if the letter guessed is not in the word, then the letter will be displayed under guesses, and the guesses remaining will decrease by one
            } else {
                console.log('the letter does NOT match');
                guessedLetters.push(userGuess);
                // guessesRemaining--;
                updateScreen();
            }
        }
    }
}

console.log(chosenWordHidden);

// ___________________________________POSSIBLE FUNCITONS??

function lostGame() {
    if (guessesRemaining === 0) {
        losses++;
        setup();
    }
}

function wonGame() {
    if (guessesRemaining > 0 || chosenWordHidden === char) {
        wins++;
        setup();
    }
}




// Function to update the HTML on the page
function updateScreen() {
    document.getElementById("numWins").innerHTML = wins;
    document.getElementById("numLosses").innerHTML = losses;
    document.getElementById("numLives").innerHTML = guessesRemaining;
    // document.getElementById("chosenWordHidden").innerHTML = chosenWordHidden.join(" "); //this line will not work for some reason
    document.getElementById("chosenWord").innerHTML = chosenWordHidden;
}


