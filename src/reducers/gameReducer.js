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
    const [first, second] = drawnHand;
    const isFirstGreaterThanSecond = R.gt(first, second);
    const sortedHand = {
        high: isFirstGreaterThanSecond ? first : second,
        low: isFirstGreaterThanSecond ? second : first
    };

    return sortedHand;
};

const dealHand = currentDeck => {
    let virtualDeck = currentDeck.slice();
    const drawnHand = virtualDeck.splice(0, 2);

    return {
        inPlay: true,
        deck: virtualDeck,
        hand: { ...getSortedHand(drawnHand) }
    };
};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case DEAL:
            return {
                ...initialState,
                ...dealHand(state.deck ? state.deck : DECK)
            };
        case SHUFFLE_DECK:
            return {
                ...state,
                deck: shuffle(state.deck ? state.deck : DECK)
            };
        default:
            return state;
    }
}
