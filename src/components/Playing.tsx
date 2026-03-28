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
        <div style={{ width: '100%' }}>
            
            {/* Top Dashboard */}
            <div className="neon-panel game-info-panel">
                <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', letterSpacing: '2px' }}>ROUND SEQUENCE</div>
                    <div style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--color-text)', lineHeight: 1 }}>{round.toString().padStart(2, '0')}</div>
                    <div style={{ marginTop: '5px' }}>
                         <span style={{ color: 'var(--color-secondary)' }}>CARDS DEPLOYED: {cardsPerRound}</span>
                    </div>
                </div>

                <div className={`suit-display suit-${currentSuit.toLowerCase()}`}>
                    <div className="suit-icon">{SUIT_ICONS[currentSuit]}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{currentSuit}</div>
                </div>
            </div>

            {/* Main Action Table */}
            <div className="neon-panel">
                {errorMsg && <p className="error-msg">{errorMsg}</p>}
                
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>AGENT</th>
                                <th>SCORE</th>
                                <th>PREDICTION</th>
                                <th>OUTCOME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(p => (
                                <tr key={p.id}>
                                    <td style={{ fontWeight: 'bold' }}>{p.name}</td>
                                    <td className="score-positive" style={{ fontSize: '1.2rem', textAlign: 'center' }}>{p.score}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input
                                            type="number"
                                            min="0"
                                            max={cardsPerRound}
                                            value={p.currentBid}
                                            onChange={(e) => handleBidChange(p.id, e.target.value)}
                                            style={{ width: '80px', textAlign: 'center' }}
                                        />
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                            <button
                                                className={`btn-result btn-win ${p.roundStatus === 'WIN' ? 'selected' : ''}`}
                                                onClick={() => handleStatusChange(p.id, 'WIN')}
                                                style={{ flex: 1 }}
                                            >
                                                SUCCESS
                                            </button>
                                            <button
                                                className={`btn-result btn-lose ${p.roundStatus === 'LOSE' ? 'selected' : ''}`}
                                                onClick={() => handleStatusChange(p.id, 'LOSE')}
                                                style={{ flex: 1 }}
                                            >
                                                FAILURE
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                    <button 
                         onClick={finishGame}
                         style={{ 
                             borderColor: '#ff4d4d', 
                             color: '#ff4d4d',
                             padding: '15px 30px'
                         }}
                    >
                        ABORT MISSION
                    </button>
                    
                    <button 
                        className="primary-action" 
                        onClick={finishRound}
                        style={{ padding: '15px 40px', fontSize: '1.2rem', flex: 1 }}
                    >
                        CONFIRM ROUND DATA &gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};
