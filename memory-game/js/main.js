console.log("up and running!");
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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

console.log("User flipped " + cards[cardId].rank)
cardsPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();
}	

flipCard(0);
flipCard(2);




