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
	if(cardsPlay[0]===cardsPlay[1]){
		alert("You found a match!");
		console.log("Match!");
		}
	else{
		alert('try again');
		console.log("Try again");
	}
	}


function flipCard(){
	cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank)
	cardsPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute("src", cards[cardId].cardImage);
	if(cardsPlay.length === 2){
		checkForMatch();
	}
}





function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();
