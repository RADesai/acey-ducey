import gameUtils from "./gameUtils";
import { DECK } from "../utils/Constants";

describe("gameUtils", () => {
  it("drawCard -> should return first card in deck", () => {
    expect(gameUtils.drawCard(DECK)).toEqual("2");
  });
  it("isWinningHand -> should return true when the hand is won", () => {
    const currentHand = {
      first: "K",
      second: "3",
      play: "5"
    };
    //   expect(gameUtils.isWinningHand(currentHand)).toEqual(false);
  });
  it("isWinningHand -> should return false when the hand is lost", () => {
    const currentHand = {
      first: "K",
      second: "3",
      play: "2"
    };
    //   expect(gameUtils.isWinningHand(currentHand)).toEqual(true);
  });
});
