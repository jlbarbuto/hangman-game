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

    var guess = 0;

    var losses = 0;

    var wins = 0;
    
    console.log(wordBank);
    console.log(indexPointer);
    console.log(word);
    console.log(wordLength);

// Fuctions ========================

    function reset(){
        indexPointer = Math.floor(Math.random() * wordBank.length);
        word = wordBank[indexPointer];
        wordLength = word.length;
        wordBank.splice(indexPointer, 1);
        guessCounter = 8;
        txt = "";
        blankDisplay = [];
        lettersUsed = [];
        for (var i = 0; i<wordLength; i++){
            blankDisplay.push("__");
        }
        for (var i = 0; i<blankDisplay.length; i++){
            txt += blankDisplay[i] + " ";
        }
        document.getElementById("wordDisplay").textContent = txt;
        document.getElementById("guessDiv").textContent = "";
    }

// Main Process ====================
for (var i = 0; i<wordLength; i++){
    blankDisplay.push("__");
}
for (var i = 0; i<blankDisplay.length; i++){
    txt += blankDisplay[i] + " ";
}

wordBank.splice(indexPointer, 1);
document.getElementById("wordDisplay").textContent = txt;
console.log(txt + ' this is txt');

//the user presses a key to start the game. the letter pressed is stored in variable userGuess
document.onkeyup = function(event){
    var userGuess = event.key;

    //check for loss
    if (guessCounter === 0){
        losses++;
        console.log(losses + "losses");
        document.getElementById("losses").textContent = losses;
        alert("You've run out of guesses. The correct answer was " + word);
        reset();
    }
    //check for win
    else if (blankDisplay === word){

    }
    //user makes a guess
    else{
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
                guess++;
            }
        }

        txt = "";
        console.log(guess + " number of right letters");

        //re-builds the display string with any correct guesses added
        for (var i = 0; i<blankDisplay.length; i++){
            txt += blankDisplay[i] + " ";
        }

        //userGuess is added to the lettersUsed array to remind user what they've already guessed
        lettersUsed.push(userGuess);
        console.log(lettersUsed);

        document.getElementById("wordDisplay").textContent = txt;
        document.getElementById("guessDiv").textContent = "You guessed letter: " + userGuess;
        document.getElementById("guessedLetters").textContent =  lettersUsed;

        console.log(guess);
        if (guess>=1){
            console.log(txt + " txt before replacements");
            txt = txt.replace(/\s/g,"");
            console.log(txt + "txt after replacements");
            if (txt === word){
                wins++;
                document.getElementById("wins").textContent = wins;
                alert("You won!! You guessed " + word + "!");
                reset();
            }
        }
        else{
            guessCounter--;
        }

        guess = 0;
        console.log("guesses left at end of key function: " + guessCounter);
    }
};