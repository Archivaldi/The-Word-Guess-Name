var options = ["violin", "cello", "alto", "trumpet", "guitar", "piano", "saxophone", "clarinet", "flute"];


var points = 0; //wins
var guess = 12;
var word = document.getElementById("word");
var par = document.getElementById("par");                          //var for Letters Already Guessed paragraph

function lose() {                                                  //if player got 0 tries, then refresh the page
    if (guess == 0) {
        alert("you lose!");
        document.location.reload();
    }
}

function takeWord() {
        var varIndex = Math.floor(Math.random() * options.length);         //random word
        var guessWord = options[varIndex];                                 //Computer's random chosen word from "options" array
        console.log(guessWord);

        if (guessWord === "violin") {                                        //if word "violin" is chousen

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
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
                    wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                    word.textContent = wordToDisplay.join(" ");
                    console.log(event.key);
                    win();
                } 
            }
        }   else if (guessWord === "cello") {

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
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
                    wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                    word.textContent = wordToDisplay.join(" ");
                    console.log(event.key);
                    win();
                } 
            }


         } else if (guessWord === "alto") {
            var wordToGuess = guessWord.split("");                           //we want to split our guessWord on elements because we can't 
                                                                            // change every character, bua we can change every separate string 
            document.onkeypress = keyPressed;

            var wordToDisplay = Array(guessWord.length).fill("_");           //in start of game we want't to display guessWord like "_ _ _ _ _ _"

            word.textContent = wordToDisplay.join(" ");

            function win() {                                                 //function for winning
                if (word.textContent == "a l t o") {
                            console.log("you win!");
                            points = points + 1;
                            document.querySelector(".wins").innerText = points;
                            takeWord();
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
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
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
                    wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                    word.textContent = wordToDisplay.join(" ");
                    console.log(event.key);
                    win();
                } 
            }
            
         } else if (guessWord === "guitar") {
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
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
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
                        } 
                    }
            


            function keyPressed() {                                          //function for game 

                console.log(wordToGuess)
                if (word.textContent.includes(event.key)){                   //put restrictions for doubled correct letters
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
                }  else { 
                    wordToDisplay[wordToGuess.indexOf(event.key)] = event.key;
                    word.textContent = wordToDisplay.join(" ");
                    console.log(event.key);
                    win();
                } 
            }
            
         } 


}

takeWord();


// } else if (guessWord == "alto") {
//     var violinLets = ["a", "l", "o", "t"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }  
//         }
//                     document.onkeyup = keyPressed;

// } else if (guessWord == "trumpet") {
//     var violinLets = ["t", "r", "u", "m", "p", "e"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 6]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }  
//         }
//                     document.onkeyup = keyPressed;

// } else if (guessWord == "guitar") {
//     var violinLets = ["g", "u", "i", "t", "a", "r"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 6]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }  
//         }
//                     document.onkeyup = keyPressed;

// } else if (guessWord == "piano") {
//     var violinLets = ["p", "i", "a", "n", "0"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }   
//         }
//                     document.onkeyup = keyPressed;

// } else if (guessWord == "saxophone") {
//     var violinLets = ["s", "a", "x", "o", "p", "h", "n", "e"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                      } else if  (event.key == guessWord[guessWord.length - 7]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                      } else if  (event.key == guessWord[guessWord.length - 8]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                      } else if  (event.key == guessWord[guessWord.length - 9]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                      } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }   
//         }
//                     document.onkeyup = keyPressed;

// } else if (guessWord == "clarinet"); {
//     var violinLets = ["c", "l", "a", "r", "i", "n", "e", "t"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 6]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 7]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 8]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }  
//         }
//                     document.onkeyup = keyPressed;

// } 

// if (guessWord == "flute") {
//     var violinLets = ["f", "l", "u", "t", "e"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 3]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 4]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 5]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else {
//                         guess = guess - 1;
//                         document.querySelector(".guess").innerText = guess;
//                     }   
//         }
//                     document.onkeyup = keyPressed;

// }