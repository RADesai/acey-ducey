import actions from './actions';
import { SHUFFLE_DECK, DRAW_HAND, BET, PASS, DEAL } from '../utils/Constants';

describe('actions', () => {
    it('DEAL: should create an action to start the game', () => {
        const expectedAction = {
            type: DEAL
        };
        expect(actions.deal()).toEqual(expectedAction);
    });
    it('SHUFFLE_DECK: should create an action to shuffle the deck', () => {
        const expectedAction = {
            type: SHUFFLE_DECK
        };
        expect(actions.shuffleDeck()).toEqual(expectedAction);
    });
    it('BET: should create an action to place the given bet', () => {
        const expectedAction = {
            type: BET,
            payload: 4
        };
        expect(actions.bet(4)).toEqual(expectedAction);
    });
    it('PASS: should create an action to pass on the hand', () => {
        const expectedAction = {
            type: PASS
        };
        expect(actions.pass()).toEqual(expectedAction);
    });
});
