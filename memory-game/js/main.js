console.log("up and running!");
let cards = ['queen','queen','king','king'];
let cardsPlay = [];

function checkForMatch(){

if(cardsPlay.length === 2){
	if(cardsPlay[0]===cardsPlay[1]){
		alert("You found a match!");
		console.log("Match!");
		}
	else{
		alert('try again');
		console.log("Try again");
	}
	}
}


function flipCard(cardId){

console.log("User flipped " + cards[cardId])
cardsPlay.push(cards[cardId]);

checkForMatch();
}	

flipCard(0);
flipCard(2);

