import React from 'react';
import { Player } from '../types';

interface FinishedProps {
    players: Player[];
    resetGame: () => void;
}

export const Finished: React.FC<FinishedProps> = ({ players, resetGame }) => {
    // Sort players by highest score
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];

    return (
        <div className="card" style={{ textAlign: 'center' }}>
            <h2>Game Finished!</h2>
            {winner && (
                <div style={{ margin: '20px 0' }}>
                    <h3>Winner: {winner.name} 🏆</h3>
                    <p style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold' }}>
                        Score: {winner.score}
                    </p>
                </div>
            )}

            <h3>Final Standings</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {sortedPlayers.map((p, index) => (
                    <li key={p.id} style={{
                        padding: '10px',
                        fontSize: '1.2rem',
                        borderBottom: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        maxWidth: '300px',
                        margin: '0 auto'
                    }}>
                        <span><strong>#{index + 1}</strong> {p.name}</span>
                        <span style={{ fontWeight: 'bold' }}>{p.score}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={resetGame}
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    fontSize: '1.1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Play Again
            </button>
        </div>
    );
};
