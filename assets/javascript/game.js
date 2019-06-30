    //     var counter = 0;

	// 	function keyPressed() {
	// 	var vowels = ["a", "e", "u", "i", "o"];

	// 	if (vowels.includes(event.key)) {
	// 		counter = counter + 1;
	// 		document.querySelector(".wins").innerText = counter;
	// 	} else {
	// 		counter = counter - 1;
	// 		document.querySelector(".wins").innerText = counter;
	// 	}
	// }
    // document.onkeyup = keyPressed;


    //3 options for rock paper scissors

	// //array
	// var options = ["r", "p", "s"];

	// var play = true;

	// while (play){
	// 	//string
	// 	var uO = prompt("enter r, p or s.");

	// 	//how would I check if the user entered an appropriate value
	// 	if (!options.includes(uO)){
	// 		alert('you did not enter a valid option')
	// 	}

	// 	var ranIndex = Math.floor(Math.random() * options.length);
	// 	var cO = options[ranIndex]; //computer's random choice

	// 	// r and r, s and s, p and p
	// 	if (cO == uO){
	// 		alert('you tied');
	// 	//user wins
	// 		//r vs s, s vs p, p vs r
	// 	}else if((uO == "r" && cO == "s") || (uO == "s" && cO == "p") || (uO == "p" && cO == "r")){
	// 		alert('you won');
	// 	}else{
	// 		alert('you lost');
	// 	}

	// 	alert(`you chose ${uO} and the computer chose ${cO}`);

	// 	play = confirm("do you want to play");
	// }
	
    
    var options = ["violin", "cello", "alto", "trumpet", "guitar", "piano", "saxophone", "clarinet", "flute"];

    var points = 0; //wins

    var play = true; // start game

        var varIndex = Math.floor(Math.random() * options.length); //random word
        var guessWord = options[varIndex]; //Computer's random chosen word from "options" array
        console.log(guessWord);

if (guessWord == "violin") {
    var violinLets = ["v", "i", "o", "l", "n"]
        function keyPressed() {
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
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    } 
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "cello") {
    var violinLets = ["c", "e","l", "o"]
        function keyPressed() {
                    if (event.key == guessWord[guessWord.length - 1]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 2]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 4]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    } 
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "alto") {
    var violinLets = ["a", "l", "o", "t"]
        function keyPressed() {
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
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    } 
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "trumpet") {
    var violinLets = ["t", "r", "u", "m", "p", "e"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 6]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    }  
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "guitar") {
    var violinLets = ["g", "u", "i", "t", "a", "r"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 6]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    }  
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "piano") {
    var violinLets = ["p", "i", "a", "n", "0"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    }  
        }
                    document.onkeyup = keyPressed;
                
}

else if (guessWord == "saxophone") {
    var violinLets = ["s", "a", "x", "o", "p", "h", "n", "e"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                     } else if  (event.key == guessWord[guessWord.length - 7]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                     } else if  (event.key == guessWord[guessWord.length - 8]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                     } else if  (event.key == guessWord[guessWord.length - 9]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                     } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    }  
        }
                    document.onkeyup = keyPressed;
                
}
else (guessWord == "clarinet"); {
    var violinLets = ["c", "l", "a", "r", "i", "n", "e", "t"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 6]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 7]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else if  (event.key == guessWord[guessWord.length - 8]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    } 
        }
                    document.onkeyup = keyPressed;
                
}

if (guessWord == "flute") {
    var violinLets = ["f", "l", "u", "t", "e"]
        function keyPressed() {
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
                    } else if  (event.key == guessWord[guessWord.length - 5]) {
                        points = points + 1;
                        document.querySelector(".wins").innerText = points;
                    } else {
                        points = points - 1;
                        document.querySelector(".wins").innerText = points;
                    }  
        }
                    document.onkeyup = keyPressed;
                
}
