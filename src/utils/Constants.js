import CARD_2 from './4.png';
import CARD_3 from './5.png';
import CARD_4 from './6.png';
import CARD_5 from './7.png';
import CARD_6 from './8.png';
import CARD_7 from './9.png';
import CARD_8 from './10.png';
import CARD_9 from './11.png';
import CARD_10 from './11.png';
import CARD_J from './11.png';
import CARD_Q from './11.png';
import CARD_K from './11.png';
import CARD_A from './11.png';

// ACTIONS
export const DEAL = 'DEAL';
export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const PASS = 'PASS';
export const BET = 'BET';
export const PLAY_CARD = 'PLAY_CARD';

// Game Consts
// export const CARD_VALUES = {
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     10: 10,
//     J: 10,
//     K: 10,
//     Q: 10,
//     A: 11 // TODO: Ace-LOW v Ace-HIGH
// };
export const CARDS = {
    2: { value: 2, image: CARD_2 },
    3: { value: 3, image: CARD_3 },
    4: { value: 4, image: CARD_4 },
    5: { value: 5, image: CARD_5 },
    6: { value: 6, image: CARD_6 },
    7: { value: 7, image: CARD_7 },
    8: { value: 8, image: CARD_8 },
    9: { value: 9, image: CARD_9 },
    10: { value: 10, image: CARD_10 },
    J: { value: 10, image: CARD_J },
    K: { value: 10, image: CARD_K },
    Q: { value: 10, image: CARD_Q },
    A: { value: 11, image: CARD_A } // TODO: Ace-LOW v Ace-HIGH
};

export const HOUSE_CHIPS_200 = 200; // TODO: have default ante also?

export const DECK = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'K',
    'Q',
    'A'
];
