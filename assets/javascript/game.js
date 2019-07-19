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
var characters = [];

// var guesses = chosenWord.length + 5;

// chooses a random word
function setup() {
    chosenWord = words[Math.floor(Math.random() * words.length - 1) + 1];
    console.log(chosenWord);
    characters = chosenWord.split("");

    
    for (var i = 0; i < chosenWord.length; i++) {
        // chosenWordHidden[i] = "_";
        chosenWordHidden.push("_")
    }
    
    //sets guesses and guessed letters to 0
    guessedLetters = [];
    guessesRemaining = 10;

    
    //show on screen
    updateScreen();
    
};

//to keep track of how many letters are left to be guessed
// var remainingLetters = chosenWord.length;

setup();

document.onkeyup = function (event) {
    
    var userGuess = event.key;
    console.log(userGuess);

    checkLetter(userGuess)

    
}

function checkLetter(userGuess){

    if (userGuess) {
        for (var j = 0; j < charachters.length; j++) {
            console.log(j);
            
            if (characters[j] === userGuess) {
                console.log(characters[j]);
                
                
            } 
        
        }
    }
}

    // else if (chosenWord[j] !== event.key) {
            //     guesses--;
            //     guessedLetters.join("");
                
            // }

// var newNumber = 0;

// function addTwo(num){
//     //if(typeof(num) === "number")
//     console.log(num + 2);
//     newNumber = num + 2
// }

//var newNumber = addTwo(3)







// Function to update the HTML on the page
function updateScreen() {
    document.getElementById("numWins").innerHTML = wins;
    document.getElementById("numLosses").innerHTML = losses;
    document.getElementById("numLives").innerHTML = guessesRemaining;
    document.getElementById("chosenWordHidden").innerHTML = chosenWordHidden.join(" ");
}


