import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

describe('App Container', () => {
  const wrapper = mount(
    <Provider store={ store }>
      <App/>
    </Provider>
  );
  const appContainer = wrapper.find(App);
  
  it('should render <App /> component', () => {
    expect(appContainer.exists()).toEqual(true);
  });
  
  it("should render app title: 'Acey-Deucy'", () => {
    expect(appContainer.find('.App-title').text()).toEqual('Acey-Deucy');
  });
});