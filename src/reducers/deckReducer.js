import { DECK } from "../utils/Constants";

const initialState = {
  deck: DECK
};

const shuffle = (deck, state) => {
  return deck
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
};

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case "SHUFFLE_DECK":
      return {
        ...state,
        deck: shuffle(state.deck ? state.deck : DECK, state)
      };
    default:
      return state;
  }
}
