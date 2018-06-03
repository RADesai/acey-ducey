import {
  SHUFFLE_DECK,
  DECK,
  HOUSE_CHIPS_200,
  DRAW_CARD,
  DRAW_HAND
} from "../utils/Constants";
import R from "ramda";
import gameUtils from "../utils/gameUtils";

const initialState = {
  deck: DECK,
  chips: HOUSE_CHIPS_200,
  hand: {}
};

const shuffle = deck =>
  deck
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const drawHand = deck => {
  const first = deck.shift();
  const second = deck.shift();
  const isFirstGreaterThanSecond = R.gt(first, second);

  return {
    deck,
    hand: {
      high: isFirstGreaterThanSecond ? first : second,
      low: isFirstGreaterThanSecond ? second : first
    }
  };
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        deck: shuffle(state.deck ? state.deck : DECK)
      };
    case DRAW_HAND:
      return {
        ...state,
        ...drawHand(state.deck ? state.deck : DECK)
      };
    default:
      return state;
  }
}
