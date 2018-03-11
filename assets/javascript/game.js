// Variables =======================

    //word bank
    var wordBank = ["adventure", "airplane", "anarctica", "asia", "cruise", "customs", 
        "europe", "hotel", "photography", "souvenir", "state", "suitcase"];

    var indexPointer = Math.floor(Math.random() * wordBank.length);

    var word = wordBank[indexPointer];
    
    var wordLength = word.length;
    
    var wordsUsed = [];

    var lettersUsed = [];

    var blankDisplay = [];
    
    var wordsUsed = [];

    var userGuess = "";

    var txt = "";

    var guessCounter = 8;

    var guessed = false;

    var losses = 0;
    
    console.log(wordBank);
    console.log(indexPointer);
    console.log(word);
    console.log(wordLength);

// Fuctions ========================


// Main Process ====================

console.log("guesses left: " + guessCounter);

for (var i = 0; i<wordLength; i++){
    blankDisplay.push("__");
}
for (var i = 0; i<blankDisplay.length; i++){
    txt += blankDisplay[i] + " ";
}

wordsUsed.push(word);
console.log(wordsUsed);

console.log(blankDisplay);
console.log(txt);

document.getElementById("wordDisplay").innerHTML = txt;

//the user presses a key to start the game. the letter pressed is stored in variable userGuess
document.onkeyup = function(event){
    var userGuess = event.key;
    console.log("current userGuess is " + userGuess);
    console.log(guessCounter + " guesses left before the loop");

    if (guessCounter = 0){
        alert("You've run out of guesses. The correct answer was " + word);
        losses++;
    }
    else{
        console.log(guessCounter + " guesses after the loop");

        //loop through every character in the word to see if the userGuess matches
        for (var c = 0; c<wordLength; c++){
            var letter = word.charAt(c);
            
            //if statement determines if the guess was correct
            if (letter === userGuess){
                console.log(letter);

                //replaces any correct guesses witht the "__" in the diaplay array
                for (b = 0; b<wordLength; b++){
                    var changeIndex = c;
                    blankDisplay[c] = letter;
                }
            } 
        }

        txt = "";

        //re-builds the display string with any correct guesses added
        for (var i = 0; i<blankDisplay.length; i++){
            txt += blankDisplay[i] + " ";
        }

        //userGuess is added to the lettersUsed array to remind user what they've already guessed
        lettersUsed.push(userGuess);
        console.log(lettersUsed);

        document.getElementById("wordDisplay").innerHTML = txt;
        document.getElementById("guessDiv").innerHTML = "<p> you guessed letter " + userGuess + "</p>";
        document.getElementById("guessedLetters").innerHTML =  lettersUsed;

        guessCounter--;
        console.log("guesses left at end of key function: " + guessCounter);
    }
};