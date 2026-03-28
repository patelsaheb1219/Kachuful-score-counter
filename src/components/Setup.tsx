import React, { useState } from 'react';
import { Player } from '../types';

interface SetupProps {
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    startGame: () => void;
    errorMsg: string;
}

export const Setup: React.FC<SetupProps> = ({ players, setPlayers, startGame, errorMsg }) => {
    const [newPlayerName, setNewPlayerName] = useState('');

    const addPlayer = () => {
        if (!newPlayerName.trim()) return;
        setPlayers([...players, {
            id: Date.now(),
            name: newPlayerName.toUpperCase(),
            score: 0,
            currentBid: '',
            roundStatus: null,
            history: []
        }]);
        setNewPlayerName('');
    };

    return (
        <div className="neon-panel">
            <h2>&gt; INITIALIZE PLAYERS</h2>
            <div className="flex-center" style={{ marginBottom: '30px', marginTop: '20px', width: '100%' }}>
                <input
                    type="text"
                    placeholder="ENTER CODENAME..."
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                    autoFocus
                    style={{ flex: 1 }}
                />
                <button onClick={addPlayer}>ADD AGENT</button>
            </div>

            <div style={{ marginBottom: '30px', minHeight: '100px' }}>
                {players.length === 0 ? (
                    <div style={{ color: 'var(--color-text-dim)', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
                        Processing... No active agents detected.
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                         {players.map((p, index) => (
                            <div key={p.id} className="player-list-item">
                                <div>
                                    <span className="player-number">{(index + 1).toString().padStart(2, '0')}</span>
                                    {p.name}
                                </div>
                                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', letterSpacing: '2px' }}>READY</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button 
                className="primary-action"
                onClick={startGame} 
                disabled={players.length < 2} 
                style={{ width: '100%', padding: '15px', marginTop: '20px' }}
            >
                {players.length < 2 ? 'AWAITING AGENTS (MIN 2)' : 'INITIATE PROTOCOL_V1'}
            </button>
            
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
    );
};
