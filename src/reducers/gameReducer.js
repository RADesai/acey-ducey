import {
    SHUFFLE_DECK,
    DECK,
    HOUSE_CHIPS_200,
    DRAW_CARD,
    DEAL
} from '../utils/Constants';
import * as R from 'ramda';
import gameUtils from '../utils/gameUtils';

const initialState = {
    deck: DECK,
    chips: HOUSE_CHIPS_200,
    hand: {}
};

const shuffle = deck =>
    deck
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

const getSortedHand = drawnHand => {
    // const first = drawnHand[0];
    // const second = drawnHand[1];
    const [first, second] = drawnHand;
    const isFirstGreaterThanSecond = R.gt(first, second);
    console.log('First > Second ', isFirstGreaterThanSecond);

    const sortedHand = {
        high: isFirstGreaterThanSecond ? first : second,
        low: isFirstGreaterThanSecond ? second : first
    };

    console.log('Sorted Hand:', sortedHand);

    return sortedHand;
};

const dealHand = deck => {
    let virtualDeck = deck.slice();
    const drawnHand = virtualDeck.splice(0, 2);
    // const remainingDeck = virtualDeck;

    const sortedHand = getSortedHand(drawnHand);
    console.log('test?', sortedHand);

    return {
        inPlay: true,
        deck: virtualDeck, // validate that we update the deck and hand correctly
        hand: sortedHand
    };
};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case SHUFFLE_DECK:
            return {
                ...state,
                deck: shuffle(state.deck ? state.deck : DECK)
            };
        case DEAL:
            return {
                chips: state.chips,
                ...dealHand(state.deck ? state.deck : DECK)
            };
        default:
            return state;
    }
}
