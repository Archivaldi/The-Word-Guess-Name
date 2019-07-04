var options = ["violin", "cello", "viola", "trumpet", "guitar", "piano", "saxophone", "clarinet", "flute"];
var guess = 12;
var points = 0; //wins
var word = document.getElementById("word");
var par = document.getElementById("par");                          //var for Letters Already Guessed paragraph

//audio Files
var audioViolin =  new Audio('assets/audio/violin.mp3'); 
var audioCello =  new Audio('assets/audio/cello.mp3'); 
var audioTrumpet =  new Audio('assets/audio/Trumpet.mp3'); 
var audioCello =  new Audio('assets/audio/viola.mp3');
var audioGuitar =  new Audio('assets/audio/guitar.mp3'); 
var audioViola =  new Audio('assets/audio/viola.mp3'); 
var audioPiano =  new Audio('assets/audio/piano.mp3'); 
var audioSax =  new Audio('assets/audio/saxophone.mp3'); 
 



function takeWord() {
    var varIndex = Math.floor(Math.random() * options.length);         //random word
    var guessWord = options[varIndex];                                 //Computer's random chosen word from "options" array
    console.log(guessWord);
    var par = document.getElementById("par");
    par.innerText = "";
    var guess = 12;
    document.querySelector(".guess").innerText = guess;

    if (guessWord === "violin") {                                      //if word "violin" is chousen

        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "v i o l i n") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioTrumpet.pause();
                audioSax.pause();
                audioViola.pause();
                audioGuitar.pause();
                audioCello.pause();
                audioPiano.pause();
                audioViolin.play();
            }
        }

        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "i") {                               // word "violin" has two "i", so, we want to chahge both
                wordToDisplay[1] = event.key;
                wordToDisplay[4] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }
    } else if (guessWord === "cello") {

        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "c e l l o") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioTrumpet.pause();
                audioSax.pause();
                audioViola.pause();
                audioGuitar.pause();
                audioViolin.pause();
                audioPiano.pause();
                audioCello.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "l") {                               // word "violin" has two "i", so, we want to chahge both
                wordToDisplay[2] = event.key;
                wordToDisplay[3] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }


    } else if (guessWord === "viola") {
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "v i o l a") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioTrumpet.pause();
                audioGuitar.pause();
                audioViolin.pause();
                audioCello.pause();
                audioPiano.pause();
                audioSax.pause();
                audioViola.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "trumpet") {

        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "t r u m p e t") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioGuitar.pause();
                audioViolin.pause();
                audioCello.pause();
                audioViola.pause();
                audioPiano.pause();
                audioSax.pause();
                audioTrumpet.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "t") {                               // word "violin" has two "i", so, we want to chahge both
                wordToDisplay[0] = event.key;
                wordToDisplay[6] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "guitar") {
        var audioWin = new Audio('assets/audio/violin.mp3');
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "g u i t a r") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioViolin.pause();
                audioCello.pause();
                audioViola.pause();
                audioTrumpet.pause();
                audioPiano.pause();
                audioSax.pause();
                audioGuitar.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "piano") {
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "p i a n o") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioViolin.pause();
                audioCello.pause();
                audioViola.pause();
                audioTrumpet.pause();
                audioGuitar.pause();
                audioSax.pause();
                audioPiano.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "saxophone") {
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "s a x o p h o n e") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                audioViolin.pause();
                audioCello.pause();
                audioViola.pause();
                audioTrumpet.pause();
                audioGuitar.pause();
                audioPiano.pause();
                audioSax.play();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "o") {                               // word "violin" has two "i", so, we want to chahge both
                wordToDisplay[3] = event.key;
                wordToDisplay[6] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "clarinet") {
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "c l a r i n e t") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    } else if (guessWord === "flute") {
        var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
        // change every character, bua we can change every separate string 
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");

        function win() {                                                 //function for winning
            if (word.textContent == "f l u t e") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
            }
        }
        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {                                          //function for game 

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {                   //put restrictions for doubled correct letters
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {            //put restrictions for doubled incorrect letters 
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {             //if you tiped incorrect letter, points goes down
                guess = guess - 1;
                document.querySelector(".guess").innerText = guess;
                par.innerText = par.textContent + (event.key) + ", ";
                console.log("-1 point");
                lose();
            } else {
                wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                word.textContent = wordToDisplay.join(" ");
                console.log(event.key);
                win();
            }
        }

    }


}

takeWord();

