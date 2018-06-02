import { DECK } from "../utils/Constants";
import deckReducer from "./deckReducer";

const initialState = {
  DECK
};

describe("deckReducer", () => {
  it("should default to initial state", () => {
    expect(deckReducer(undefined, {})).toEqual({ deck: DECK });
  });
  it("action: SHUFFLE_DECK -> should shuffle the deck", () => {
    const SHUFFLE_DECK = {
      type: "SHUFFLE_DECK"
    };
    expect(deckReducer({}, SHUFFLE_DECK)).toEqual({
      deck: expect.arrayContaining(DECK)
    }); //TODO: look into how to test randomness
  });
});
