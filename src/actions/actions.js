import { SHUFFLE_DECK, PASS, BET, PLAY_CARD, DEAL } from '../utils/Constants';

const actions = {
    deal: () => ({
        type: DEAL
    }),
    shuffleDeck: () => ({
        type: SHUFFLE_DECK
    }),
    pass: () => ({
        type: PASS
    }),
    playCard: betAmount => ({
        type: PLAY_CARD
    }),
    bet: betAmount => ({
        type: BET,
        payload: betAmount
    })
};

export default actions;
