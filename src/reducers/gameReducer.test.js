import { DECK, HOUSE_CHIPS_200 } from "../utils/Constants";
import gameReducer from "./gameReducer";

const initialState = {
  deck: DECK,
  chips: HOUSE_CHIPS_200,
  hand: {}
};

describe("gameReducer", () => {
  it("should default to initial state", () => {
    expect(gameReducer(undefined, {})).toEqual({
      chips: 200,
      deck: DECK,
      hand: {}
    });
  });
  it("SHUFFLE_DECK -> should shuffle the deck", () => {
    const SHUFFLE_DECK = {
      type: "SHUFFLE_DECK"
    };
    expect(gameReducer(undefined, SHUFFLE_DECK)).toEqual({
      //TODO: look into how to test randomness
      ...initialState,
      deck: expect.arrayContaining(DECK)
    });
  });
  it("DRAW_HAND -> should draw a hand from the deck", () => {
    const DRAW_HAND = {
      type: "DRAW_HAND"
    };
    expect(gameReducer(undefined, DRAW_HAND)).toEqual({
      ...initialState, // how is this working? deck is losing 2 cards
      hand: {
        low: "2",
        high: "3"
      }
    });
  });
});
