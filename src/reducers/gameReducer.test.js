import { DECK, HOUSE_CHIPS_200 } from '../utils/Constants';
import gameReducer from './gameReducer';

const initialState = {
    deck: DECK,
    chips: HOUSE_CHIPS_200,
    hand: {}
};

describe('gameReducer', () => {
    it('should default to initial state', () => {
        expect(gameReducer(undefined, {})).toEqual({
            chips: 200,
            deck: DECK,
            hand: {}
        });
    });
    it('DEAL -> should deal first 2 cards from deck to the hand, update playing state', () => {
        const DEAL = {
            type: 'DEAL'
        };
        expect(gameReducer(undefined, DEAL)).toEqual({
            ...initialState,
            deck: DECK.slice().splice(2), // deck after first two cards are removed
            hand: {
                low: '2',
                high: '3'
            },
            inPlay: true // state update for user option to BET || PASS
        });
    }); // TODO: extract the spec out to its own 'it'
    it('SHUFFLE_DECK -> should shuffle the deck', () => {
        const SHUFFLE_DECK = {
            type: 'SHUFFLE_DECK'
        };
        expect(gameReducer(undefined, SHUFFLE_DECK)).toEqual({
            //TODO: look into how to test randomness
            ...initialState,
            deck: expect.arrayContaining(DECK)
        });
    });
    it('DRAW_HAND -> should draw a hand from the deck', () => {
        const DRAW_HAND = {
            type: 'DRAW_HAND'
        };
        expect(gameReducer(undefined, DRAW_HAND)).toEqual({
            ...initialState, // how is this working? deck is losing 2 cards
            hand: {
                low: '2',
                high: '3'
            }
        });
    });
});
