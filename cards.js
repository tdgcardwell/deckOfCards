// started with devdojo.com/devdojo/create-a-deck-of-cards-in-javascript

// First thing is first, let's create a simple card object.
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

// now that we've got our card object let's create a simple deck object that will return an array of 52 cards.
function deck(){
	this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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


function dealCardsOld(amount,pack,where){
  for(var i=0; i < amount; i++){
    div = document.createElement('div');
    div.className = 'card';

    if(pack[i].suit == 'Diamonds' || pack[i].suit == 'Hearts') {
      div.className = 'card red';
    }

    if(pack[i].suit == 'Diamonds'){
      var ascii_char = '♦';
    } else {
      var ascii_char = '&' + pack[i].suit.toLowerCase() + ';';
    }

    div.innerHTML = '' + pack[i].name + '' + ascii_char + '';
    where.appendChild(div);
  }
}


// alt version
function dealCards(amount,pack,where){
  for(var i=0; i < amount; i++){
    div = document.createElement('div');
    div.className = 'cardFront';

    if(pack[i].suit == 'Diamonds' || pack[i].suit == 'Hearts') {
      div.className = 'cardFront red';
    }

    if(pack[i].suit == 'Diamonds'){
      var ascii_char = '♦';
    } else {
      var ascii_char = '&' + pack[i].suit.toLowerCase() + ';';
    }

    div.innerHTML = '' + pack[i].name + '' + ascii_char + '';

    let card = `<div class="card">
      ${div}
      <div class="cardBack">
        reverse of card
      </div>
    </div>`;

    where.appendChild(div);
  }
}

// then different functions on different pages?
