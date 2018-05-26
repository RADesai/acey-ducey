import { SHUFFLE_DECK } from "../utils/Constants";

const actions = {
  shuffleDeck: deck => ({
    type: SHUFFLE_DECK,
    payload: deck
  })
};

export default actions;
