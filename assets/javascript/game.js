                                    //variable for updating Already Guessed Letters
    
     var options = ["violin"]//, "cello", "alto", "trumpet", "guitar", "piano", "saxophone", "clarinet", "flute"];

    var points = 0; //wins
    var guess = 12;
    var word = document.getElementById("word");

        var varIndex = Math.floor(Math.random() * options.length);         //random word
        var guessWord = options[varIndex];                                 //Computer's random chosen word from "options" array
        console.log(guessWord);


    if (guessWord === "violin") {                                        //if word "violin" is chousen
        
    word.innerText = "_ _ _ _ _ _"                                     //take the lenght of word for a start
    // QUESTION 1. I can't change character by character 

    var par = document.getElementById("par");

        // QUESTION 3. function keyPressed doesn't work outside of loop

    function keyPressed() {                                         //function for game with word "violin"
                      if (event.key == guessWord[guessWord.length - 1]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 2]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 3]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 4]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 6]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        guess = guess - 1;
                        document.querySelector(".guess").innerText = guess;
                        par.innerText = par.textContent + (event.key);
                                if (guess === 0) {
                                    document.querySelector(".guess").innerText = "You Lose!";
                                    // QUESTION 2. if i type "alert" or "confirm", it works BEFORE "You Lose"
                                } 
                    }
        }
        // QUESTION 4. How to stop work this loop after loosing? I put break, but it doesn't work.
        // QUESTION 5. I should change "Wins" when whole word is typed, not every letter
        
                    document.onkeyup = keyPressed;
    }

// } else if (guessWord == "cello") {
//     var violinLets = ["c", "e","l", "o"]
//         function keyPressed() {
//                     if (event.key == guessWord[guessWord.length - 1]) {
//                         points = points + 1;
//                         document.querySelector(".wins").innerText = points;
//                     } else if  (event.key == guessWord[guessWord.length - 2]) {
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
