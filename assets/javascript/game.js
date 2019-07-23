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
var storeCorrectGuess =[];


// chooses a random word
function setup() {
    chosenWord = words[Math.floor(Math.random() * words.length - 1) + 1];
    console.log(chosenWord);
    char = chosenWord.split("");
    console.log(char);

    //puts the correct number of underscores for each letter of the randomly chosen word
    for (var i = 0; i < char.length; i++) {
        chosenWordHidden.push("_");
    }
    //shows the hidden word in the console so you can cheat :)
    console.log(chosenWordHidden);

    //sets guesses and guessed letters to 0
    guessedLetters = [];
    guessesRemaining = 10;

};


setup();

//track the keys the user presses
document.onkeyup = function (event) { 

//restricts the keys recorded to letters only
if (event.keyCode > 64 && event.keyCode < 91){
    
    //sets the user guess equal to the key pressed
    var userGuess = event.key;
        console.log(userGuess);

        //calls the check letter function with the userGuess as it's parameter
        checkLetter(userGuess);
}
}

//will run everytime the user hits a key
function checkLetter(userGuess) {

    //if this variable reamins false the number guesses will subtract by 1
    var matchingLetter = false;
    
    //checking to see if the letter hit is within the randomly chosen word

        for (var j = 0; j < char.length; j++) {

            if (char[j] === userGuess) {
                
                //stores the correct guess in a variable
                storeCorrectGuess.push(j);
                matchingLetter = true;
                
            } 
 
        }
        //second for loop to map the indexes of the correct letters back to the --- array
        for (var k = 0; k < storeCorrectGuess.length; k++){

            //puts the correct user guesses back into the hidden word array
            chosenWordHidden.splice(storeCorrectGuess[k], 1, userGuess);
        }
    //pushes all of the user guesses into the empty userguess array    
    guessedLetters.push(userGuess);
  
    // empties out the stored guesses so the index numbers match the second time around
    storeCorrectGuess = []; 

    //detracts from guesses remainging for each wrong guess, and starts the game over if guesses are less than 1
 if (matchingLetter === false) {
    guessesRemaining--;
    if (guessesRemaining < 1) {
    lostGame();
    setup();
    }
 }
 // checks to see if the chosen hidden word array includes any -'s each time a key is pressed. 
  var didIWin =  chosenWordHidden.includes("_");
  console.log(didIWin);
  
  //when didIWin is false, then the won game function will rum.
  if (didIWin !== true){
    wonGame();
    setup();
  }
 //updates all the HTML elements 
 updateScreen();
 
}

console.log(chosenWordHidden);


function lostGame() {
    if (guessesRemaining < 1) {
        losses++;
        clear();
        
    } else if (guessesRemaining > 0) {
        checkLetter();
    }
}

function wonGame() {
        wins++;
        clear();
}

//sets all the values except wins and losses to thier beginning states
function clear (){
 guessedLetters = [];
 chosenWord = "";
 guessesRemaining = 0;
 chosenWordHidden = [];
 char = [];
 storeCorrectGuess =[];
}


// Function to update the HTML on the page
function updateScreen() {
    document.getElementById("numWins").innerHTML = wins;
    document.getElementById("numLosses").innerHTML = losses;
    document.getElementById("numLives").innerHTML = guessesRemaining;
    document.getElementById("chosenWord").innerHTML = chosenWordHidden.join(" ");
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
}


