import React from "react";
import { mount } from "enzyme";
import Card from "./Card";

describe("Card Component", () => {
  const props = {
    suit: "Clubs",
    value: "4"
  };
  const wrapper = mount(<Card {...props} />);
  const cardComponent = wrapper.find(Card);

  it("should render <Card /> component", () => {
    expect(cardComponent.exists()).toEqual(true);
  });

  it("should render card value", () => {
    expect(cardComponent.find(".card .card-value").text()).toEqual("4");
  });
  it("should render card suit", () => {
    expect(cardComponent.find(".card-suit").text()).toEqual("Clubs");
  });
});
