var word;

var guess;		//user guess
var letters = [];		//correctly guessed letters
var wrongLetters = [];		//incorrectly guessed letters
var counter;		//counts correct letters
var losses = 0;
var wins = 0;

// console.log(wrongLetters);

document.getElementById("losses").textContent = losses;
document.getElementById("wins").textContent = wins;

var wordList = ['red', 'blue', 'green', 'yellow', 'orange', 'black', 'purple', 'salmon']; 


//randomly chooses a word from the array and replaces letters with underscores
function start() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    counter = 10;
    document.getElementById("counter").textContent = counter;
    for (i = 0; i < word.length; i++) {
        letters[i] = "__";
    }

    document.getElementById("answer").innerHTML = letters.join(" ");
    console.log(word);

}


//checks if letter is in the word or not
function checkLetter() {
	document.onkeyup = function(event) {
		guess = event.key.toLowerCase();
		var found = false;
		for (i = 0; i < word.length; i++) {
			if (guess === word[i]) {
				letters[i] = guess;
				document.getElementById("answer").innerHTML = letters.join(" ");
				found = true;
			} 
		}
		//wrong letters go into the wrongLetters array and are displayed
		if (found) return;
		if (wrongLetters.indexOf(guess) < 0) {
			wrongLetters.push(guess);
			document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
			//every wrong guess subtracts one from the counter
			counter--;
			console.log(counter);
			document.getElementById("counter").innerHTML = counter;
			//when counter reaches 0 it's Game Over
			//+1 to the losses if 10 words are missed
			
			if (counter > 0 && letters.join(" ") === word) {
				document.getElementById("wins").textContent = wins + 1;
				// console.log(letters);
				confirm("YOU WIN! Play Again?"); {
					wins++;
					counter = 10;
					letters = [];
					wrongLetters = [];
					start();
				}
				
			}

			if (counter === 0) {
				document.getElementById("losses").textContent = losses + 1;
				// console.log(losses);
				confirm("YOU LOOSE... play again?"); {
					losses++;
					counter = 10;
					letters = [];
					wrongLetters = [];
					start();
				}
			}
		}
	}
}


start();
checkLetter();





// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// for(let i=0; i<alphabet.length; i++){

// 	var div = document.createElement('DIV');
// 	var letters = document.createTextNode(alphabet[i])
// 	div.appendChild(letters);
// 	// div.style.width='40px';
// 	// div.style.height='40px';
// 	// div.style.border='2px solid';
// 	// div.style.margin='10px';
// 	div.style.display='inline-block';
// 	div.classList.add('letterBox');
// 	// letters.style.margin='5px';
// 	document.body.appendChild(div);
// 	var letterBoxes = document.getElementsByClassName('letterBox');
// 	letterBoxes[i].addEventListener('click', function(){
// 		showLetter(i)
// 	})

// }


// function showLetter(x){
// 	console.log(alphabet[x])
// }

