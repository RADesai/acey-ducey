import actions from "./actions";
import { SHUFFLE_DECK } from "../utils/Constants";

describe("actions", () => {
  it("SHUFFLE_DECK: should create an action to shuffle the deck", () => {
    const deck = {};
    const expectedAction = {
      type: SHUFFLE_DECK
    };
    expect(actions.shuffleDeck(deck)).toEqual(expectedAction);
  });
});
