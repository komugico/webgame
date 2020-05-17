export const STONE_EMPTY = 0;
export const STONE_WHITE = 1;
export const STONE_BLACK = 2;
export const FLIP_INTERVAL = 250;
export const PUT_POS = -1;

let E = STONE_EMPTY;
let W = STONE_WHITE;
let B = STONE_BLACK;

export const STONES_INIT = [
    [E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E],
    [E, E, E, W, B, E, E, E],
    [E, E, E, B, W, E, E, E],
    [E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E]
];
export const FLIPS_INIT = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];