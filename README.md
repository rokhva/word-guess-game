# word-guess-game

******* version 1.0.0 *******

#1. The problem the app is trying to solve
This app allows the user to play a tea themed version of hang man. The user has a limited amount of guesses, the object of the game is to correctly guess the word before the number of guesses reaches zero.


#2. Organization of the app
Primary states of the application (and thier abilities)
1 - Landing state (gives the prompt for the user to press any key to start the game)
2 - Underscores of word to be guessed (the number of underscores correlates to the number of letters in the word to be guessed)
3 - New word (once the user either guesses the word correctly, or runs out of guesses, the game will choose another word)

#3. Start to finish flow of the app
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

#4. Link to the deployed version
https://github.com/rokhva/word-guess-game
