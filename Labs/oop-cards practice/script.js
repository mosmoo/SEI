class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }
  createDeck() {
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    for (let i = 0; i < suits.length; i++){
        for (let j = 0; j <ranks.length; j++){
            const card = new Card(suits[i],ranks[j],j+2)
            this.cards.push(card);
        }
    }
    this.shuffle();
  }
  shuffle() {
    const cards = this.cards;

    for (let i = 0; i < cards.length; i++) {
      const j = Math.floor(Math.random() * (i - 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]
      /*let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;*/
    }
  }
}

const gameDeck = new Deck();
console.log(gameDeck.cards);
