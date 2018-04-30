// Variables =======================

    //word bank
    var wordBank = ["adventure", "africa", "airplane", "anarctica", "asia", "cruise", "customs", 
        "europe", "exploration", "highway", "hotel", "journey", "memories", "ocean", "photography",
        "pilgrimage", "sightseeing", "souvenir", "state", "suitcase", "tourist", "voyage", "wanderlust"];

    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", ];

    var indexPointer = Math.floor(Math.random() * wordBank.length);

    var word = wordBank[indexPointer];
    
    var wordLength = word.length;
    
    var lettersUsed = [];

    var blankDisplay = [];

    var userGuess = "";

    var txt = "";

    var lettersTxt= "";

    var guessCounter = 8;

    var guess = 0;

    var losses = 0;

    var wins = 0;
    
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
        document.getElementById("guessDiv").textContent = "Press any letter to start.";
        document.getElementById("guessesLeft").textContent = "Guesses: 8";
        document.getElementById("guessedLetters").textContent = " ";
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
document.getElementById("guessesLeft").textContent = "Guesses: 8";

//the user presses a key to start the game. the letter pressed is stored in variable userGuess
document.onkeyup = function(event){
    userGuess = event.key;
    userGuess = userGuess.toLowerCase();

    if(    userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" 
        || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" 
        || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" 
        || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" 
        || userGuess === "y" || userGuess === "z"){

        //check for loss
        if (guessCounter === 0){
            losses++;
            document.getElementById("losses").textContent = "Losses: " + losses;
            alert("You've run out of guesses. The correct answer was " + word);
            reset();
        }

        //user makes a guess
        else{

            var found = 0
            for (var i=0;i<lettersUsed.length;i++){
                if (userGuess===lettersUsed[i]){
                    found++;
                }
            }

            if(found===0){
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

                //re-builds the display string with any correct guesses added
                for (var i = 0; i<blankDisplay.length; i++){
                    txt += blankDisplay[i] + " ";
                }

                //userGuess is added to the lettersUsed array to remind user what they've already guessed
                lettersUsed.push(userGuess);
                document.getElementById("wordDisplay").textContent = txt;
                document.getElementById("guessDiv").textContent = "You guessed letter: " + userGuess;

                lettersTxt = lettersUsed + ",";
                lettersTxt = lettersTxt.replace(/,/g," ");
                document.getElementById("guessedLetters").textContent =  lettersTxt;

                

                //check for a win, else user looses a guess
                if (guess>=1){
                    txt = txt.replace(/\s/g,"");
                    if (txt === word){
                        wins++;
                        document.getElementById("wins").textContent = "Wins: " + wins;
                        alert("You won!! You guessed " + word + "!");
                        reset();
                    }
                }
                else{
                    guessCounter--;
                    document.getElementById("guessesLeft").textContent = "Guesses: " + guessCounter;
                }
                guess = 0;
            }
           
        }
    }
};