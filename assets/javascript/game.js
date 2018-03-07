// Variables =======================

    //word bank
    var wordBank = ["adventure", "ariplane", "anarctica", "asia", "cruise", "customs", 
        "europe", "hotel", "photography", "souvenir", "state", "suitcase"];

    var indexPointer = Math.floor(Math.random() * wordBank.length);

    var word = wordBank[indexPointer];
    
    var wordLength = word.length;
    
    var wordsUsed = [];

    var lettersUsed = [];

    var blankDisplay = "";

    var userGuess = "";
    
    console.log(wordBank);
    console.log(indexPointer);
    console.log(word);
    console.log(wordLength);

// Fuctions ========================

    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

// Main Process ====================

    for (var i = 0; i<wordLength; i++){
        var blankDisplay = blankDisplay + "__ "
    }

    console.log(blankDisplay);

    document.onkeyup = function(event){
        var userGuess = event.key;
        console.log(userGuess);

        for (var c = 0; c<wordLength; c++){
            var letter = word.charAt(c);
            console.log(letter);
            
            if (letter === userGuess){
                console.log(letter);
                
                for (b = 0; b<wordLength; b++){
                    var changeStart = c * 3;
                    console.log(changeStart);

                    // blankDisplay.replaceAt(changeStart, letter + " ");
                    // console.log(blankDisplay);

                }

            }

        }
    
    };