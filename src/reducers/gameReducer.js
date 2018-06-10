import { SHUFFLE_DECK, DECK, HOUSE_CHIPS_200, DEAL } from '../utils/Constants';
import gameUtils from '../utils/gameUtils';

const initialState = {
    deck: DECK,
    chips: HOUSE_CHIPS_200,
    inPlay: false,
    hand: {}
};

const shuffle = deck =>
    deck
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

const dealHand = currentDeck => {
    let virtualDeck = currentDeck.slice(); // extract to method to 'copy' deck?
    const drawnHand = [
        gameUtils.drawCard(virtualDeck),
        gameUtils.drawCard(virtualDeck)
    ];
    return {
        inPlay: true,
        deck: virtualDeck,
        hand: { ...gameUtils.getSortedHand(drawnHand) }
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
