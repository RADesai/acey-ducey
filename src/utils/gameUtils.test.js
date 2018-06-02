import gameUtils from "./gameUtils";
import { DECK } from "../utils/Constants";

describe("gameUtils", () => {
  it("method: drawCard -> should return first card in deck", () => {
    expect(gameUtils.drawCard(DECK)).toEqual("2");
  });
});
