import React from 'react';
import { mount } from 'enzyme';
import Game from './Game';

describe('Game Container', () => {
    const props = {};
    const wrapper = mount(<Game {...props} />);
    const gameContainer = wrapper.find(Game);
    it('should render <Game /> Container', () => {
        expect(gameContainer.exists()).toEqual(true);
    });

    it('should render PLAY Button', () => {
        expect(
            gameContainer.find('.game-container .play-button').exists()
        ).toEqual(true);
        expect(
            gameContainer.find('.game-container .play-button').text()
        ).toEqual('PLAY');
    });
});
