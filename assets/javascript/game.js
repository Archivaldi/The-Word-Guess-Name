
// array with 9 words that the copmputer should chose 
var options = ["violin", "cello", "viola", "trumpet", "guitar", "piano", "saxophone", "clarinet", "flute"];

//we set 12 tries for player
var guess = 12;

//player starts with 0 ponts
var points = 0;

//take variables to change text in the html
var word = document.getElementById("word");

//var for Letters Already Guessed paragraph
var par = document.getElementById("par");

//audio Files
var audioViolin = new Audio('assets/audio/violin.mp3');
var audioCello = new Audio('assets/audio/cello.mp3');
var audioTrumpet = new Audio('assets/audio/trumpet.mp3');
var audioGuitar = new Audio('assets/audio/guitar.mp3');
var audioViola = new Audio('assets/audio/viola.mp3');
var audioPiano = new Audio('assets/audio/piano.mp3');
var audioSax = new Audio('assets/audio/saxophone.mp3');
var audioClarinet = new Audio('assets/audio/clarinet.mp3');
var audioFlute = new Audio('assets/audio/flute.mp3');
var audioLose = new Audio('assets/audio/lose.mp3');

// function for changing text when player typed correct word
function removeTextWord() {
    document.getElementById("celloText").classList.remove("show");
    document.getElementById("violaText").classList.remove("show");
    document.getElementById("clarinetText").classList.remove("show");
    document.getElementById("fluteText").classList.remove("show");
    document.getElementById("guitarText").classList.remove("show");
    document.getElementById("saxophoneText").classList.remove("show");
    document.getElementById("trumpetText").classList.remove("show");
    document.getElementById("pianoText").classList.remove("show");
    document.getElementById("violinText").classList.remove("show");
}

//function for changing image when player typed correct word
function removeImgFromShow() {
    document.getElementById("start").classList.remove("show");
    document.getElementById("cello").classList.remove("show");
    document.getElementById("viola").classList.remove("show");
    document.getElementById("clarinet").classList.remove("show");
    document.getElementById("flute").classList.remove("show");
    document.getElementById("guitar").classList.remove("show");
    document.getElementById("saxophone").classList.remove("show");
    document.getElementById("trumpet").classList.remove("show");
    document.getElementById("piano").classList.remove("show");
    document.getElementById("violin").classList.remove("show");
}

//function for changing music when player typed correct word
function stopAudio() {
    audioTrumpet.pause();
    audioSax.pause();
    audioViola.pause();
    audioGuitar.pause();
    audioCello.pause();
    audioPiano.pause();
    audioClarinet.pause();
    audioFlute.pause();
    audioViolin.pause();
}



// function to take a random word by a computer from "options" array
function takeWord() {
    var varIndex = Math.floor(Math.random() * options.length);
    var guessWord = options[varIndex];
    console.log(guessWord);
    var par = document.getElementById("par");
    par.innerText = "";
    var guess = 12;
    document.querySelector(".guess").innerText = guess;

    //START OF GAME

    //if player got 10 points then game is over
    if (points == 10) {
        var winner = confirm("Congratulations! You won! Do you want to play again?")
        if (winner == true) {
            document.location.reload();
        } else {
            var bye = document.getElementById("bye");
            bye.classList.add("show");
        }

    } else if (guessWord === "violin") {                                      //if word "violin" is chousen

        //we want to split our guessWord on elements because we can't change every character, bua we can change every separate string 
        var wordToGuess = guessWord.split("");
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

        word.textContent = wordToDisplay.join(" ");                      //then we take our separate string into ine whole string

        function win() {                                                 //function for winning
            if (word.textContent == "v i o l i n") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();

                //stop other audios and run that we need
                stopAudio();
                audioViolin.play();

                //hide all images and show that we need
                removeImgFromShow();
                document.getElementById("violin").classList.add("show");

                removeTextWord();
                document.getElementById("violinText").classList.add("show");
            }
        }

        function lose() {                                                  //if player got 0 tries, then refresh the page
            if (guess == 0) {
                alert("You lose!");
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

        var wordToGuess = guessWord.split("");
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");

        word.textContent = wordToDisplay.join(" ");

        function win() {
            if (word.textContent == "c e l l o") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                stopAudio();
                audioCello.play();


                removeImgFromShow();
                document.getElementById("cello").classList.add("show");

                removeTextWord();
                document.getElementById("celloText").classList.add("show");
            }
        }
        function lose() {
            if (guess == 0) {
                audioLose.play();
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "l") {
                wordToDisplay[2] = event.key;
                wordToDisplay[3] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {
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
        var wordToGuess = guessWord.split("");

        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");

        word.textContent = wordToDisplay.join(" ");

        function win() {
            if (word.textContent == "v i o l a") {
                console.log("you win!");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                stopAudio();
                audioViola.play();


                removeImgFromShow();
                document.getElementById("viola").classList.add("show");

                removeTextWord();
                document.getElementById("violaText").classList.add("show");
            }
        }
        function lose() {
            if (guess == 0) {
                audioLose.play();
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (par.textContent.includes(event.key)) {
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {
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

        var wordToGuess = guessWord.split("");
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");

        word.textContent = wordToDisplay.join(" ");

        function win() {
            if (word.textContent == "t r u m p e t") {
                console.log("+1 point");
                points = points + 1;
                document.querySelector(".wins").innerText = points;
                takeWord();
                stopAudio();
                audioTrumpet.play();

                removeImgFromShow();
                document.getElementById("trumpet").classList.add("show");

                removeTextWord();
                document.getElementById("trumpetText").classList.add("show");
            }
        }
        function lose() {
            if (guess == 0) {
                audioLose.play();
                alert("you lose!");
                document.location.reload();
            }
        }



        function keyPressed() {

            console.log(wordToGuess)
            if (word.textContent.includes(event.key)) {
                word.textContent = word.textContent;
                console.log("you typed this letter");
            } else if (event.key == "t") {
                wordToDisplay[0] = event.key;
                wordToDisplay[6] = event.key;
                word.textContent = wordToDisplay.join(" ");
                win();
            } else if (par.textContent.includes(event.key)) {
                par.textContent = par.textContent;
                console.log("guessed letter")
            } else if (!(wordToGuess.includes(event.key))) {
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
        var wordToGuess = guessWord.split("");
        document.onkeypress = keyPressed;

        var wordToDisplay = Array(guessWord.length).fill("_");
        word.textContent = wordToDisplay.join(" ");

        function win() {
        if (word.textContent == "t r u m p e t") {
            console.log("you win!");
            points = points + 1;
            document.querySelector(".wins").innerText = points;
            takeWord();
            stopAudio();
            audioGuitar.play();

            removeImgFromShow();
            document.getElementById("guitar").classList.add("show");

            removeTextWord();
            document.getElementById("guitarText").classList.add("show");
        }
    }

    function lose() {
        audioLose.play();
        alert("you lose!");
        document.location.reload();
    }



function keyPressed() {

    console.log(wordToGuess)
    if (word.textContent.includes(event.key)) {
        word.textContent = word.textContent;
        console.log("you typed this letter");
    } else if (par.textContent.includes(event.key)) {
        par.textContent = par.textContent;
        console.log("guessed letter")
    } else if (!(wordToGuess.includes(event.key))) {
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
    var wordToGuess = guessWord.split("");
    document.onkeypress = keyPressed;

    var wordToDisplay = Array(guessWord.length).fill("_");

    word.textContent = wordToDisplay.join(" ");

    function win() {
        if (word.textContent == "p i a n o") {
            console.log("you win!");
            points = points + 1;
            document.querySelector(".wins").innerText = points;
            takeWord();
            stopAudio();
            audioPiano.play();

            removeImgFromShow();
            document.getElementById("piano").classList.add("show");

            removeTextWord();
            document.getElementById("pianoText").classList.add("show");
        }
    }
    function lose() {
        if (guess == 0) {
            audioLose.play();
            alert("you lose!");
            document.location.reload();
        }
    }



    function keyPressed() {

        console.log(wordToGuess)
        if (word.textContent.includes(event.key)) {
            word.textContent = word.textContent;
            console.log("you typed this letter");
        } else if (par.textContent.includes(event.key)) {
            par.textContent = par.textContent;
            console.log("guessed letter")
        } else if (!(wordToGuess.includes(event.key))) {
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
    var wordToGuess = guessWord.split("");
    document.onkeypress = keyPressed;

    var wordToDisplay = Array(guessWord.length).fill("_");

    word.textContent = wordToDisplay.join(" ");

    function win() {
        if (word.textContent == "s a x o p h o n e") {
            console.log("you win!");
            points = points + 1;
            document.querySelector(".wins").innerText = points;
            takeWord();
            stopAudio();
            audioSax.play();


            removeImgFromShow();
            document.getElementById("saxophone").classList.add("show");

            removeTextWord();
            document.getElementById("saxophoneText").classList.add("show");
        }
    }
    function lose() {
        if (guess == 0) {
            audioLose.play();
            alert("you lose!");
            document.location.reload();
        }
    }



    function keyPressed() {

        console.log(wordToGuess)
        if (word.textContent.includes(event.key)) {
            word.textContent = word.textContent;
            console.log("you typed this letter");
        } else if (event.key == "o") {
            wordToDisplay[3] = event.key;
            wordToDisplay[6] = event.key;
            word.textContent = wordToDisplay.join(" ");
            win();
        } else if (par.textContent.includes(event.key)) {
            par.textContent = par.textContent;
            console.log("guessed letter")
        } else if (!(wordToGuess.includes(event.key))) {
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
    var wordToGuess = guessWord.split("");
    document.onkeypress = keyPressed;

    var wordToDisplay = Array(guessWord.length).fill("_");

    word.textContent = wordToDisplay.join(" ");

    function win() {
        if (word.textContent == "c l a r i n e t") {
            console.log("you win!");
            points = points + 1;
            document.querySelector(".wins").innerText = points;
            takeWord();
            stopAudio();
            audioClarinet.play();

            removeImgFromShow();
            document.getElementById("clarinet").classList.add("show");

            removeTextWord();
            document.getElementById("clarinetText").classList.add("show");
        }
    }
    function lose() {
        if (guess == 0) {
            audioLose.play();
            alert("you lose!");
            document.location.reload();
        }
    }



    function keyPressed() {

        console.log(wordToGuess)
        if (word.textContent.includes(event.key)) {
            word.textContent = word.textContent;
            console.log("you typed this letter");
        } else if (par.textContent.includes(event.key)) {
            par.textContent = par.textContent;
            console.log("guessed letter")
        } else if (!(wordToGuess.includes(event.key))) {
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
    var wordToGuess = guessWord.split("");
    document.onkeypress = keyPressed;

    var wordToDisplay = Array(guessWord.length).fill("_");

    word.textContent = wordToDisplay.join(" ");

    function win() {
        if (word.textContent == "f l u t e") {
            console.log("you win!");
            points = points + 1;
            document.querySelector(".wins").innerText = points;
            takeWord();
            stopAudio();
            audioFlute.play();

            removeImgFromShow();
            document.getElementById("flute").classList.add("show");

            removeTextWord();
            document.getElementById("fluteText").classList.add("show");
        }
    }
    function lose() {
        if (guess == 0) {
            audioLose.play();
            alert("you lose!");
            document.location.reload();
        }
    }



    function keyPressed() {

        console.log(wordToGuess)
        if (word.textContent.includes(event.key)) {
            word.textContent = word.textContent;
            console.log("you typed this letter");
        } else if (par.textContent.includes(event.key)) {
            par.textContent = par.textContent;
            console.log("guessed letter")
        } else if (!(wordToGuess.includes(event.key))) {
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

