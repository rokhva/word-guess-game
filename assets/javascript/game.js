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

// var correctGuess = ;

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
if (event.keyCode > 64 && event.keyCode < 91){
    
    var userGuess = event.key;
        console.log(userGuess);
    
        checkLetter(userGuess);
}
}

//will run everytime the user hits a key

function checkLetter(userGuess) {
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

 if (matchingLetter === false) {
    guessesRemaining--;
    if (guessesRemaining < 1) {
    lostGame();
    setup();
    }
 }
  var didIWin =  chosenWordHidden.includes("_");
  console.log(didIWin);
  if (didIWin !== true){
    wonGame();
    setup();
  }
 updateScreen();
 
}

console.log(chosenWordHidden);





// function checkLetter(userGuess) {

//     //checking to see if the letter hit is within the randomly chosen word
//     if (userGuess) {
//         for (var j = 0; j < char.length; j++) {

//             if (char[j] === userGuess) {
//                 //the letter will show up in it's correct postion in the chosenHiddenWord array
//                 var letterReplace = userGuess;
          
//                 chosenWordHidden.splice( j, 1, letterReplace);
//                 console.log(chosenWordHidden);
                
//                 // chosenWordHidden
//                 // chosenWordHidden.splice();
                
                
//                 //this will update the screen with the correct letters and score
//                 updateScreen();

//                 //if the letter guessed is not in the word, then the letter will be displayed under guesses, and the guesses remaining will decrease by one
//             } else {
//                 console.log('the letter does NOT match');
//                 // guessedLetters.push(userGuess);
//             }
//         }
//     }

//     subtractLife( userGuess !== char[j]);
// }

// console.log(chosenWordHidden);

// ___________________________________POSSIBLE FUNCITONS??




// function subtractLife () {
//     guessesRemaining--;
// }

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
    // document.getElementById("chosenWordHidden").innerHTML = chosenWordHidden.join(" "); //this line will not work for some reason
    document.getElementById("chosenWord").innerHTML = chosenWordHidden.join(" ");
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
}


