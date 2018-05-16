import actions from './actions'
import { SHUFFLE_DECK } from '../constants/Actions'

describe('actions', () => {
    it('SHUFFLE_DECK: should create an action to shuffle the deck', () => {
        const deck = {};
        const expectedAction = {
            type: SHUFFLE_DECK,
            payload: deck
        };
        expect(actions.shuffleDeck(deck)).toEqual(expectedAction);
    })
})