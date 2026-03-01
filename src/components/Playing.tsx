import React from 'react';
import { Player, SUITS, SUIT_ICONS } from '../types';

interface PlayingProps {
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    round: number;
    cardsPerRound: number;
    trumpIndex: number;
    errorMsg: string;
    setErrorMsg: (msg: string) => void;
    finishRound: () => void;
    finishGame: () => void;
}

export const Playing: React.FC<PlayingProps> = ({
    players,
    setPlayers,
    round,
    cardsPerRound,
    trumpIndex,
    errorMsg,
    finishRound,
    finishGame
}) => {
    const currentSuit = SUITS[trumpIndex];

    const handleBidChange = (id: number, val: string) => {
        const num = val === '' ? '' : parseInt(val);
        setPlayers(players.map(p => p.id === id ? { ...p, currentBid: num as number | '' } : p));
    };

    const handleStatusChange = (id: number, status: 'WIN' | 'LOSE') => {
        setPlayers(players.map(p => p.id === id ? { ...p, roundStatus: status } : p));
    };

    return (
        <>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        <h2>Round {round}</h2>
                        <p><strong>Cards:</strong> {cardsPerRound}</p>
                    </div>

                    <div className={`suit-display suit-${currentSuit.toLowerCase()}`}>
                        Trump: {SUIT_ICONS[currentSuit]} {currentSuit}
                    </div>
                </div>
            </div>

            <div className="card">
                {errorMsg && <p className="error-msg">{errorMsg}</p>}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Score</th>
                                <th>Bid</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(p => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td className="score-positive">{p.score}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="0"
                                            max={cardsPerRound}
                                            value={p.currentBid}
                                            onChange={(e) => handleBidChange(p.id, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className={`btn-result ${p.roundStatus === 'WIN' ? 'btn-win' : 'btn-outline'}`}
                                            onClick={() => handleStatusChange(p.id, 'WIN')}
                                        >
                                            Win
                                        </button>
                                        <button
                                            className={`btn-result ${p.roundStatus === 'LOSE' ? 'btn-lose' : 'btn-outline'}`}
                                            onClick={() => handleStatusChange(p.id, 'LOSE')}
                                        >
                                            Lose
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button onClick={finishRound}>Next Round</button>
                    <button
                        onClick={finishGame}
                        style={{
                            backgroundColor: '#dc3545',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Finish Game
                    </button>
                </div>
            </div>
        </>
    );
};
