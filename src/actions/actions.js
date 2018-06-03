import {
  SHUFFLE_DECK,
  DRAW_HAND,
  PASS,
  BET,
  START_GAME
} from "../utils/Constants";

const actions = {
  startGame: () => ({
    type: START_GAME
  }),
  shuffleDeck: () => ({
    type: SHUFFLE_DECK
  }),
  drawHand: () => ({
    type: DRAW_HAND
  }),
  pass: () => ({
    type: PASS
  }),
  bet: betAmount => ({
    type: BET,
    payload: betAmount
  })
};

export default actions;
