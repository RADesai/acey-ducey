import { SHUFFLE_DECK } from '../constants/Actions'

const actions = {
    shuffleDeck: deck => ({
        type: SHUFFLE_DECK,
        payload: deck
    })
};

export default actions;