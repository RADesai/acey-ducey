import gameUtils from './gameUtils';
import { DECK } from '../utils/Constants';

describe('gameUtils', () => {
    it('drawCard -> should return first card in deck', () => {
        expect(gameUtils.drawCard(DECK)).toEqual('2');
    });
    it('getSortedHand -> should return sorted hand object when first card has a larger value', () => {
        expect(gameUtils.getSortedHand(['A', '3'])).toEqual({
            low: '3',
            high: 'A'
        });
    });
    it('getSortedHand -> should return sorted hand object when second card has a larger value', () => {
        expect(gameUtils.getSortedHand(['9', 'A'])).toEqual({
            low: '9',
            high: 'A'
        });
    });
    it('getSortedHand -> should return hand object when both cards have equal values', () => {
        expect(gameUtils.getSortedHand(['10', 'J'])).toEqual({
            low: '10',
            high: 'J'
        });
    });
    it('isPlayableHand -> should return true when cards are more than 1 number apart', () => {
        expect(gameUtils.isPlayableHand({ low: '8', high: 'J' })).toEqual(true);
    });
    it('isPlayableHand -> should return false when cards are 1 number apart', () => {
        expect(gameUtils.isPlayableHand({ low: 'K', high: 'A' })).toEqual(
            false
        );
    });
    it('isPlayableHand -> should return false when cards have equal values', () => {
        expect(gameUtils.isPlayableHand({ low: '10', high: 'J' })).toEqual(
            false
        );
    });
    it('isWinningHand -> should return true when the hand is won', () => {
        const currentHand = {
            high: 'K',
            low: '4',
            play: '5'
        };
        expect(gameUtils.isWinningHand(currentHand)).toEqual(true);
    });
    it('isWinningHand -> should return false when the hand is lost', () => {
        const currentHand = {
            high: 'K',
            low: '4',
            play: '2'
        };
        expect(gameUtils.isWinningHand(currentHand)).toEqual(false);
    });
});
