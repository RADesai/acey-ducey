import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("App Container", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appContainer = wrapper.find(App);

  it("should render <App /> component", () => {
    expect(appContainer.exists()).toEqual(true);
  });

  it("should render app title: 'Acey Deucy'", () => {
    expect(appContainer.find(".app-title").text()).toEqual("Acey Deucy");
  });
  it("should render app description", () => {
    expect(appContainer.find(".app-description-title").text()).toEqual(
      `How To Play`
    );
    expect(appContainer.find(".app-description-body").text()).toEqual(
      `Before the action, each player must add their ante into the pot. Two cards are then dealt face-up to one player. That player then bets from nothing to the amount that is in the pot at the time whether or not the third card will numerically fall in between the first two. If the third card falls in between the two other cards, the bettor takes the amount he bet out of the pot; if the third card falls outside of the two other cards, the bettor must add what he bet to the pot; and if the third card matches the numerical value of one of the other two cards, the bettor must add to the pot double what he bet.`
    );
  });
});
