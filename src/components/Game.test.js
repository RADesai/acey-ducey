import React from 'react';
import { mount } from 'enzyme';
import Game from './Game';

describe('Game Component', () => {
    const props = {};
    const wrapper = mount(<Game {...props} />);
    const gameComponent = wrapper.find(Game);
    it('should render <Game /> Component', () => {
        expect(gameComponent.exists()).toEqual(true);
    });

    it('should render PLAY Button', () => {
        expect(gameComponent.find('.game .play-button').exists()).toEqual(true);
        expect(gameComponent.find('.game .play-button').text()).toEqual('PLAY');
    });
});
