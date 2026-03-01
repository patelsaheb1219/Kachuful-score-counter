export type Suit = 'Spades' | 'Diamonds' | 'Clubs' | 'Hearts';
export const SUITS: Suit[] = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
export const SUIT_ICONS: Record<Suit, string> = {
    'Spades': '♠️',
    'Diamonds': '♦️',
    'Clubs': '♣️',
    'Hearts': '♥️'
};

export interface Player {
    id: number;
    name: string;
    score: number;
    currentBid: number | '';
    roundStatus: 'WIN' | 'LOSE' | null;
    history: { bid: number, success: boolean, points: number }[];
}

export type GameState = 'SETUP' | 'PLAYING' | 'FINISHED';
