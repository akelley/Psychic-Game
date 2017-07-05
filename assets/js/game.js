var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var sentence = "";

document.querySelector("#wins").innerHTML = "Wins: " + wins;
document.querySelector("#losses").innerHTML = "Losses: " + losses;
document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
document.querySelector("#sentence").innerHTML = "Guesses so far: " + sentence;

var randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randLetter);

document.onkeypress = function(event){
	document.querySelector("#answer").innerHTML = "";
	document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;

    var userGuess = event.key;

    var match = false;
    for(var i = 0; i < sentence.length; i++){
    	if(userGuess == sentence[i]){
    		match = true;
    		break;
    	}
    }

    if(userGuess.match(/[a-z]/i) && match == false){
	    if(userGuess == randLetter){
	        wins++;
	        document.querySelector("#wins").innerHTML = "Wins: " + wins;
	        document.querySelector("#answer").innerHTML = "Victory! The right letter was: " + randLetter;
	        guesses = 9;
	        sentence = "";
	        randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(randLetter);
	        return;
	    }


	    else {
	        guesses--;
	        sentence += (userGuess + " ");
	        document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
	        document.querySelector("#sentence").innerHTML = "Guesses so far: " + sentence;
	    }

	    if(guesses == 0){
	        losses++
	        document.querySelector("#losses").innerHTML = "Losses: " + losses;
	        document.querySelector("#sentence").innerHTML = "Guesses so far: " + sentence;
	        document.querySelector("#answer").innerHTML = "Sorry! The correct letter was: " + randLetter;
			guesses = 9;
	       	sentence = "";
	        randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	        console.log(randLetter);
	        
	    }
    }

    else {
    	document.querySelector("#answer").innerHTML = "Non-alphabetic character or redundant selection made. Please select try again!";
    	return;
    }
}   