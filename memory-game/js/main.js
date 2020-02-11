console.log("up and running!");
let cards = ['queen','queen','king','king'];
let cardsPlay = [];

let card1 = cards[0];
cardsPlay.push(card1);

let card2 = cards[2];
cardsPlay.push(card2);



console.log("User Flipped " + card1);
console.log("User Flipped " + card2);

if(cardsPlay.length === 2){
	if(cardsPlay[0]===cardsPlay[1]){
		alert("You found a match!");
	}
	else{
		alert('try again');
}
}