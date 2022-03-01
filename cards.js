// started with devdojo.com/devdojo/create-a-deck-of-cards-in-javascript

// First thing is first, let's create a simple card object.
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

// now that we've got our card object let's create a simple deck object that will return an array of 52 cards.
function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}

// Now, let's create a new deck of cards
var myDeck = new deck();
// console.log(myDeck);


// ============ Fisher - Yates Shuffle
// https://bost.ocks.org/mike/shuffle/

function fisherYates(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}



// ======================

fisherYates(myDeck)
// console.log(myDeck);


// then different functions on different pages?
