//Unit 7

//Make sure script file is correctly linked
console.log("Up and running!");

//Declare variables for card names 
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

//Display value of the two cards that the user flipped over
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);

//Unit 8

//Initialize an array to store the cards
var cards = ["queen", "queen", "king", "king"];

// //Initialize an array to hold the cards in play
var cardsInPlay = [];

// //Declare cardOne and cardTwo, and assign values to them from the cards array
// var cardOne = cards[3];
// var cardTwo = cards[2];

// // //Add cardOne and cardTwo to cardsInPlay
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// //Log the cards that the user flipped
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

// //Check to see how many items are in cardsInPlay
// if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!");
// 	}
// 	else {
// 		alert("Sorry, try again.");
// 	}
// }

//Unit 9

//var cardId;

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			alert("You found a match!");
		}
		else {
			console.log("Sorry, try again.");
			alert("Sorry, no match. Try again.");
		}
	}
	else if (cardsInPlay.length < 2) {
		console.log("Select another card.");
	}
}


var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	console.log(cardsInPlay);
	checkForMatch();
}

flipCard(0);
flipCard(2);



