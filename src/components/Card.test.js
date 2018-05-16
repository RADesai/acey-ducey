import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
    const props = {
        suit: 'Clubs',
        value: '4'
    }
    const wrapper = shallow(<Card props={ props } />);
    const cardComponent = wrapper.find('.card');
    
    it('should render <Card /> component', () => {
        expect(cardComponent.exists()).toEqual(true);
    });
    
    it('should render card value', () => {
        console.log('val:', cardComponent.find('.card').text());
        expect(cardComponent.find('.card-value').text()).toEqual('4');
    });
    it('should render card suit', () => {
        expect(cardComponent.find('.card-suit').text()).toEqual('Clubs');
    });
});