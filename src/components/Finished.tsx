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
        <div className="neon-panel" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>MISSION COMPLETE</h2>
            
            {winner && (
                <div style={{ margin: '40px 0', padding: '30px', background: 'rgba(247, 37, 133, 0.1)', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-primary)', boxShadow: 'var(--shadow-pink)' }}>
                    <div style={{ color: 'var(--color-secondary)', letterSpacing: '3px', marginBottom: '10px' }}>TOP AGENT</div>
                    <div style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: '#fff', textShadow: '0 0 20px var(--color-primary)' }}>
                        {winner.name}
                    </div>
                    <p style={{ fontSize: '2rem', color: 'var(--color-accent)', fontWeight: 'bold', margin: '10px 0' }}>
                        SCORE: {winner.score}
                    </p>
                </div>
            )}

            <h3>&lt; LEADERBOARD /&gt;</h3>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sortedPlayers.map((p, index) => (
                    <div key={p.id} style={{
                        padding: '15px',
                        background: 'rgba(255,255,255,0.05)',
                        border: index === 0 ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: '500px',
                        margin: '0 auto',
                        width: '100%',
                        borderRadius: '8px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ 
                                display: 'inline-block', 
                                width: '30px', 
                                color: index === 0 ? 'var(--color-accent)' : 'var(--color-text-dim)',
                                fontWeight: 'bold'
                            }}>
                                #{index + 1}
                            </span>
                            <span style={{ fontSize: '1.2rem' }}>{p.name}</span>
                        </div>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)', fontSize: '1.2rem' }}>{p.score}</span>
                    </div>
                ))}
            </div>

            <button
                className="primary-action"
                onClick={resetGame}
                style={{
                    marginTop: '40px',
                    width: '100%',
                    maxWidth: '300px'
                }}
            >
                RE-INITIALIZE
            </button>
        </div>
    );
};
