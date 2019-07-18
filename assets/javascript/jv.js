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
var chosenWord = [];
var guesses = 10;
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

// var guesses = chosenWord.length + 5;

// chooses a random word
function setup() {
    chosenWord = words[Math.floor(Math.random() * words.length - 1) + 1];
    console.log(chosenWord);
    
    var randomWord = [];
    for (var i = 0; i < randomWord.length; i++) {
        randomWord[i] = "_";
    }
    
    //sets guesses and guessed letters to 0
    guessedLetters = [];
    guesses = guessesRemaining;
    
    //show on screen
    updateScreen();
    
};

//to keep track of how many letters are left to be guessed
// var remainingLetters = chosenWord.length;


document.onkeyup = function (event) {
    setup();
    
    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess) {
        for (var j = 0; j < chosenWord.length; j++) {
            console.log(j);
            if (chosenWord[j] === event.key) {
                console.log(chosenWord[j]);
                // return;
                
            } 
            // else if (chosenWord[j] !== event.key) {
            //     guesses--;
            //     guessedLetters.join("");
                
            // }
        }
    }
}






// Function to update the HTML on the page
function updateScreen() {
    document.getElementById("numWins").innerHTML = wins;
    document.getElementById("numLosses").innerHTML = losses;
    document.getElementById("numLives").innerHTML = guessesRemaining;
    document.getElementById("chosenWord").innerHTML = chosenWord.join("");
}


