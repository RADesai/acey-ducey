import { SHUFFLE_DECK, PASS, BET, DEAL } from '../utils/Constants';

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
    bet: betAmount => ({
        type: BET,
        payload: betAmount
    })
};

export default actions;
