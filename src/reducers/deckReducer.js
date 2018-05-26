import { DECK } from "../utils/Constants";

const initialState = {
  DECK
};

const shuffle = deck => {
  // Randomly Shuffle the Deck
  return DECK;
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
