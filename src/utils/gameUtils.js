import * as R from 'ramda';
import { CARD_VALUES } from './Constants';
/*
  This is where the logic that powers the game will live:
  *__TODO__*
    - sort hand array so left card is always lower one
    - BET and PASS actions
      BET: -> play 1 card, isWinningHand?
        Bet up to POT
        Hand result
        warning of double loss*MVP2
        Win/Loss Payout
        Animate chip count
      PASS:
        Skip hand
        POT grows
    - Next hand, repeat...

  *__MVP2__*
    Shuffle deck option
    Share chip count to social media
    Play until quit - 'Are You Sure? You have xXx tokens!'
    Add mercy tokens at low count
*/

const drawCard = deck => deck.shift();

const getSortedHand = drawnHand => {
    const [first, second] = drawnHand;
    const isFirstGreaterThanSecond = R.gt(
        CARD_VALUES[first],
        CARD_VALUES[second]
    );
    return {
        high: isFirstGreaterThanSecond ? first : second,
        low: isFirstGreaterThanSecond ? second : first
    };
};

const isPlayableHand = hand => {
    const difference = CARD_VALUES[hand.high] - CARD_VALUES[hand.low];
    return difference !== 0 && difference !== 1;
};

const isWinningHand = hand =>
    R.and(
        R.gt(CARD_VALUES[hand.play], CARD_VALUES[hand.low]),
        R.lt(CARD_VALUES[hand.play], CARD_VALUES[hand.high])
    );

export default {
    drawCard,
    getSortedHand,
    isPlayableHand,
    isWinningHand
};
