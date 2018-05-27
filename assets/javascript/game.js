// List of variables
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDone = "";

console.log(alphabet); // Logging all of the computer's possible answers

// When a key is pressed
document.onkeyup = function(event) {
    var userGuess = event.key; // Variable userGuess is the event key
    userGuess = userGuess.toUpperCase(); // Change all user letter guesses to uppercase

    // The computer guesses a letter at the beginning of the game
    console.log(compChoice); // Log the answer as the game begins

    // If the user's letter is the same as the computer's letter
    if (userGuess === compChoice) {
        // The user earns a point
        wins++;
        // The guesses the user has go back to ten
        guessesLeft = 10;
        // The user's guesses for that round are removed
        guessesDone = "";
        // The computer chooses a new letter to be guessed
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    // The possibility of the user guessing the wrong letter    
    } else if (userGuess != compChoice) {
        // Decrease the value of the user's remaining gueses by 1
        guessesLeft--;
        // Show a running list of the user's guessed letters
        guessesDone = userGuess + " " + guessesDone;
    }
    
    // If th user runs out of guesses
    if (guessesLeft === 0) {
        // The user's losses increases by one
        losses++;
        // The user's guesses goes back to ten
        guessesLeft = 10;
        // The user's guesses for that round are removed
        guessesDone = "";
        // The computer chooses a new letter to be guessed
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    // Beating Madam Zulimar
    if (wins === 10) {
        alert("I have met my match.");
    }
    // Making a fool of yourself by challenging Madam Zulimar
    if (losses === 10) {
        alert("You are no match for Madam Zulimar.");
    }

    // Displaying the game values
    document.querySelector("#gameValues").innerHTML = "Wins: " + wins + " <br />Losses: " + losses + " <br />Guesses Left: " + guessesLeft + " <br />Your Guesses So Far: " + guessesDone;


};