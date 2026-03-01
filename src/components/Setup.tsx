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
            name: newPlayerName,
            score: 0,
            currentBid: '',
            roundStatus: null,
            history: []
        }]);
        setNewPlayerName('');
    };

    return (
        <div className="card">
            <h2>Add Players</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Player Name"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                    style={{ padding: '10px', fontSize: '1rem', width: '200px' }}
                />
                <button onClick={addPlayer}>Add</button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {players.map(p => (
                    <li key={p.id} style={{ padding: '5px', fontSize: '1.2rem' }}>
                        {p.name}
                    </li>
                ))}
            </ul>

            <button onClick={startGame} disabled={players.length < 2} style={{ marginTop: '20px' }}>
                Start Game
            </button>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
    );
};
