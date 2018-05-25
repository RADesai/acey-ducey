const initialState = {
  deck: {
    HEARTS: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "J",
      "K",
      "Q",
      "A"
    ],
    CLUBS: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "J",
      "K",
      "Q",
      "A"
    ],
    DIAMONDS: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "J",
      "K",
      "Q",
      "A"
    ],
    SPADES: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "J",
      "K",
      "Q",
      "A"
    ]
  }
};

const shuffle = deck => {
  // Randomly Shuffle the Deck
  return deck;
};

export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case "SHUFFLE_DECK":
      return {
        ...state,
        deck: shuffle(state.deck)
      };
    default:
      return state;
  }
}
