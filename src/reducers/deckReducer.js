import { deck } from "../utils/Constants";

const initialState = {
  deck
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
